import React, { useState, useEffect } from "react";
//import CardOne from "../../products/cardone/CardOne";
import CardThree from "../../products/cardthree/CardThree";
//import ProductCardTwo from "../../products/cardtwo/ProductCardTwo";
import API_DOMAIN from "../../config/config";
import {
  calculateTotals,
  districtData,
} from "../../models/cardone/card_one_model";
const ProductController = () => {
  const [products, setProducts] = useState([]);
  const [category, setcatgory] = useState([]);
  console.log(category);
  const [showCart, setShowCart] = useState(false);
  const [show, setShow] = useState(false); // State for modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [cart, setCart] = useState([]);
  const [setting, setSetting] = useState([]);
  const [banner, setbanner] = useState([]);
  const [companydata, setcompanydata] = useState([]);
  console.log("companydata", companydata);
  useEffect(() => {
    fetch(`${API_DOMAIN}/company.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search_text: "",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setcompanydata(data.body.company);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  useEffect(() => {
    fetch(`${API_DOMAIN}/page_settings.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search_text: "",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setSetting(data.body.settings);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  useEffect(() => {
    fetch(`${API_DOMAIN}/home_banner.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search_text: "",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setbanner(data.body.banner);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  useEffect(() => {
    fetch(`${API_DOMAIN}/products.php?id=zentexus123`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search_text: "",
        type : "website"
      }),
    })
      .then((response) => {
          console.log(response.text);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const initialProducts = data.body.products.map((product) => ({
          ...product,
          qty: 0, // Initialize qty to 0 for each product
        }));

        setProducts(initialProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  useEffect(() => {
    fetch(`${API_DOMAIN}/products.php?id=zentexus123`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search_text: "",
         type : "website"
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setcatgory(data.body.category);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const updateQuantity = (id, delta) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          const newQty = Math.max(product.qty + delta, 0);

          return { ...product, qty: newQty };
        }
        return product;
      })
    );
  };
  const addToCart = (productToAdd) => {
    console.log("productToAdd", productToAdd);
    const initialTotalPrice = calculateTotalPrice(
      productToAdd.total_price,
      productToAdd.qty,
      productToAdd.discount,
      productToAdd.discount_lock
    );
    const initialoverallTotal = calculateoverallTotalPrice(
      productToAdd.total_price,
      productToAdd.qty
    );

    const existingItemIndex = cart.findIndex(
      (item) => item.id === productToAdd.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      const existingItem = updatedCart[existingItemIndex];

      if (productToAdd.action === "minus") {
        const newQty = existingItem.qty - 1;
        if (newQty > 0) {
          const updatedTotalPrice = calculateTotalPrice(
            productToAdd.total_price,
            newQty,
            productToAdd.discount,
            productToAdd.discount_lock
          );
          const overallTotal = calculateoverallTotalPrice(
            productToAdd.total_price,
            newQty
          );

          updatedCart[existingItemIndex] = {
            ...existingItem,
            qty: existingItem.qty - 1,
            total_price: updatedTotalPrice,
            overallin: overallTotal,
          };
          setCart(updatedCart);
        } else {
          removeFromCart(productToAdd.id);
        }
      } else {
        const updatedTotalPrice = calculateTotalPrice(
          productToAdd.total_price,
          existingItem.qty + 1,
          productToAdd.discount,
          productToAdd.discount_lock
        );
        const overallTotal = calculateoverallTotalPrice(
          productToAdd.total_price,
          existingItem.qty + 1
        );
        updatedCart[existingItemIndex] = {
          ...existingItem,
          qty: existingItem.qty + 1,
          total_price: updatedTotalPrice,
          overallin: overallTotal,
        };
        setCart(updatedCart);
      }
    } else {
      const newCartItem = {
        id: productToAdd.id,
        name: productToAdd.name,
        product_name: productToAdd.name,
        qty: productToAdd.qty,
        discount: productToAdd.discount,
        discount_lock: productToAdd.discount_lock,
        total_price: initialTotalPrice,
        overallin: initialoverallTotal,
        per_price: productToAdd.per_price,
        product_content: productToAdd.product_content,
        img: productToAdd.img,
      };
      setCart([...cart, newCartItem]);
    }
  };

  const calculateoverallTotalPrice = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };
  const calculateTotalPrice = (
    price,
    quantity,
    discountPercent,
    discount_lock
  ) => {
    let totaldisamount = 0;
    if (discount_lock === 1) {
      totaldisamount = (price * quantity).toFixed(2);
    } else {
      const discountedPrice = price - price * (discountPercent / 100);
      totaldisamount = (discountedPrice * quantity).toFixed(2);
    }
    return totaldisamount;
  };
  const handleShowCart = () => {
    setShowCart(true);
  };
  const handleCloseCart = () => {
    setShowCart(false);
  };
  const handleShow = (product) => {
    setSelectedProduct(product); // Set the selected product for the modal
    setShow(true); // Show the modal
  };
  const handleClose = () => {
    setShow(false); // Hide the modal
  };
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, qty: 0 }; // Reset quantity to 0
        }
        return product;
      })
    );
  };
  const totals = calculateTotals(cart);
  return (
    <CardThree
      products={products}
      category={category}
      totals={totals}
      updateQuantity={updateQuantity}
      handleShowCart={handleShowCart}
      handleCloseCart={handleCloseCart}
      showCart={showCart}
      handleShow={handleShow}
      selectedProduct={selectedProduct}
      handleClose={handleClose}
      show={show}
      setShowVideoModal={setShowVideoModal}
      showVideoModal={showVideoModal}
      removeProduct={removeFromCart}
      addToCart={addToCart}
      companydata={companydata}
      cart={cart}
      setCart={setCart}
      districtData={districtData}
      setting={setting}
      banner={banner}
    />
    // <ProductCardTwo
    //   products={products}
    //   category={category}
    //   totals={totals}
    //   updateQuantity={updateQuantity}
    //   handleShowCart={handleShowCart}
    //   handleCloseCart={handleCloseCart}
    //   showCart={showCart}
    //   handleShow={handleShow}
    //   selectedProduct={selectedProduct}
    //   handleClose={handleClose}
    //   show={show}
    //   companydata={companydata}
    //   setShowVideoModal={setShowVideoModal}
    //   showVideoModal={showVideoModal}
    //   removeProduct={removeFromCart}
    //   addToCart={addToCart}
    //   cart={cart}
    //   setCart={setCart}
    //   districtData={districtData}
    //   setting={setting}
    //   banner={banner}
    // />
    // <CardOne
    //   products={products}
    //   category={category}
    //   totals={totals}
    //   updateQuantity={updateQuantity}
    //   handleShowCart={handleShowCart}
    //   handleCloseCart={handleCloseCart}
    //   showCart={showCart}
    //   handleShow={handleShow}
    //   selectedProduct={selectedProduct}
    //   handleClose={handleClose}
    //   companydata={companydata}
    //   show={show}
    //   setCart={setCart}
    //   setShowVideoModal={setShowVideoModal}
    //   showVideoModal={showVideoModal}
    //   removeProduct={removeFromCart}
    //   addToCart={addToCart}
    //   cart={cart}
    //   districtData={districtData}
    //   setting={setting}
    //   banner={banner}
    // />
  );
};

export default ProductController;
