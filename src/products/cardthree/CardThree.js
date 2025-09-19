import React, { useState, useEffect, useRef, useMemo } from "react";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  Table as BootstrapTable,
  Modal,
  Offcanvas,
  Form,
} from "react-bootstrap";
import "./cardthree.css";
import ProductCardTwo from "../cardtwo/ProductCardTwo";
import {
  FaPlay,
  FaShoppingCart,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Buttons, Close } from "../../components/Buttons/Buttons";
import { FaPlus, FaMinus } from "react-icons/fa6";
import PageTitle from "../../components/Buttons/PageTitle";
import { Forms, DropDowns } from "../../components/Forms";
import { PDFDownloadLink } from "@react-pdf/renderer";
import API_DOMAIN from "../../config/config";
import Bill from "../../pdf/Bill";

const CardThree = ({
  products,
  category,
  selectedProduct,
  totals,
  addToCart,
  setShowVideoModal,
  showVideoModal,
  updateQuantity,
  handleShowCart,
  handleCloseCart,
  showCart,
  handleClose,
  handleShow,
  show,
  removeProduct,
  cart,
  districtData,
  companydata,
  setCart,
  setting,
  banner,
}) => {
  const [checkout, setCheckOut] = useState(false);
  const [showEstimate, setShowEstimate] = useState(false);
  const [printData, setPrintData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const carouselRef = useRef(null);

  const closeOut = () => setCheckOut(false);
  const showOut = () => setCheckOut(true);
  const closeModal = () => setShowEstimate(false);
  const showModal = () => setShowEstimate(true);

  const [formData, setFormData] = useState({
    state: "",
    city: "",
    name: "",
    email: "",
    mobile: "",
    address: "",
  });
  const [cityOptions, setCityOptions] = useState([]);

  const handleStateChange = (selectedOption) => {
    const state = selectedOption.value;
    setFormData((prevState) => ({
      ...prevState,
      state,
      city: "",
    }));

    const cities = districtData[state] || [];
    setCityOptions(cities.map((city) => ({ value: city, label: city })));
  };
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleCityChange = (selectedOption) => {
    const city = selectedOption.value;
    setFormData((prevState) => ({
      ...prevState,
      city,
    }));
  };

  const handleChange = (e, fieldName) => {
    const value = e.target ? e.target.value : e.value;
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const categoryOptions = [
    { value: "all", label: "All" },
    ...category.map((cat) => ({
      value: cat.id,
      label: cat.category_name,
    })),
  ];

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption.value);
  };

  const handleCategoryImageClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const getFirstProductImage = (categoryId) => {
    const categoryProducts = products.filter(
      (product) => product.category_id === categoryId
    );

    if (categoryProducts.length > 0) {
      const validProduct = categoryProducts.find((product) => product.img);
      return validProduct
        ? validProduct.img
        : require("../../assets/images/storelogo.png");
    }
  };

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return products.filter((p) => {
      // Filter by category
      const categoryMatch =
        selectedCategory === "all" || p.category_id === selectedCategory;

      // Filter by search text
      const searchMatch =
        p.product_name.toLowerCase().includes(q) ||
        (p.product_content || "").toLowerCase().includes(q) ||
        String(p.price).includes(q);

      return categoryMatch && searchMatch;
    });
  }, [products, selectedCategory, searchQuery]);

  const handleSubmit = () => {
    fetch(`${API_DOMAIN}/online_enq_web.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart_pro: cart,
        customer_data: formData,
        total_products: totals.totalProducts,
        total_price: totals.discountRate.toFixed(2),
        total_discount: totals.overallTotal.toFixed(2),
      }),
    })
      .then((response) => {
        console.log("Response Status:", response.status);
        console.log(
          "postdata",
          JSON.stringify({
            cart_pro: cart,
            customer_data: formData,
            total_products: totals.totalProducts,
            total_price: totals.discountRate.toFixed(2),
            total_discount: totals.overallTotal.toFixed(2),
          })
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response Data:", data);
        if (data.head.code === 200) {
          setPrintData(data.body.data);
          showModal();
          setCart([]);
          setFormData([]);
          closeOut();
        } else {
          console.error(data.body.msg);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const extractVideoId = (url) => {
    const urlObj = new URL(url);
    if (urlObj.hostname === "youtu.be") {
      return urlObj.pathname.slice(1);
    } else if (
      urlObj.hostname === "youtube.com" ||
      urlObj.hostname === "www.youtube.com"
    ) {
      return urlObj.searchParams.get("v") || urlObj.pathname.split("/").pop();
    }
    return "";
  };

  const handleVideoModalShow = () => {
    console.log("Showing video modal");
    setShowVideoModal(true);
  };

  const handleVideoModalClose = () => {
    console.log("Closing video modal");
    setShowVideoModal(false);
  };

  const actionvalue = "minus";

  return (
    <>
      <Container fluid className="sticky-top bg-grey-fixed d-block d-lg-none">
        <Row>
          <Col xs="12" className="text-center py-2">
            <DropDowns
              options={categoryOptions}
              placeholder="Select Category"
              value={
                categoryOptions.find((opt) => opt.value === selectedCategory) ||
                null
              }
              onChange={handleCategoryChange}
            />
          </Col>
          <Col xs="12" className="text-center py-2">
            <Form.Control
              type="text"
              placeholder="Search Products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </Col>
          <Col lg="12" className="p-3">
            <StyledTable>
              <thead>
                <tr>
                  <th className="total-bg1">
                    Total Products : {totals.totalProducts}
                  </th>
                  <th className="total-bg1">
                    MRP Rate Total :{" "}
                    {Math.round(totals.overallTotal.toFixed(2))}
                  </th>
                  <th className="total-bg1">
                    Discount with Total (
                    {category.length > 0 ? category[0].discount : "N/A"}%) :
                    {Math.round(totals.discountRate * 100) / 100}
                  </th>

                  <th className="total-bg1">
                    <div className="cart-icon1" onClick={handleShowCart}>
                      <FaShoppingCart />
                    </div>
                  </th>
                </tr>
              </thead>
            </StyledTable>
          </Col>
        </Row>
      </Container>

      <div className="bg-grey">
        <Container fluid className="d-none d-lg-block">
          <Row className="my-3 px-3">
            <Col lg="12">
              <h2 className="category-heading">CATEGORY</h2>
            </Col>
          </Row>
          <Row className="my-3 px-3">
            <Col lg="12" className="position-relative">
              <div className="carousel-container">
                <div className="category-images d-flex" ref={carouselRef}>
                  {category
                    .filter((cat) => cat.website_active === 1) // ✅ Only show active categories
                    .map((cat) => (
                      <div
                        key={cat.id}
                        className={`category-image-container ${
                          selectedCategory === cat.id ? "active" : ""
                        }`}
                        onClick={() => handleCategoryImageClick(cat.id)}
                      >
                        <img
                          src={getFirstProductImage(cat.id)}
                          alt={cat.category_name}
                          className="category-image img-fluid"
                        />
                        <div className="category-name">{cat.category_name}</div>
                      </div>
                    ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="sticky-top bg-grey-fixed d-none d-lg-block">
          <Row className="my-3 px-3">
            <Col xs="12" className="text-center py-2">
              <Form.Control
                type="text"
                placeholder="Search Products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input w-25 "
              />
            </Col>
            <Col lg="3" className="text-center py-2">
              <DropDowns
                options={categoryOptions}
                placeholder="Select Category"
                value={
                  categoryOptions.find(
                    (opt) => opt.value === selectedCategory
                  ) || null
                }
                onChange={handleCategoryChange}
              />
            </Col>
            <Col lg="2" className="text-center py-3">
              <div className="total-bg">
                <p>Total Products: {totals.totalProducts}</p>
              </div>
            </Col>
            <Col lg="2" className="text-center py-3">
              <div className="total-bg">
                <p>MRP Total: {totals.overallTotal.toFixed(2)}</p>
              </div>
            </Col>
            <Col lg="2" className="text-center py-3">
              <div className="total-bg">
                <p>Discount Price Total: {totals.discountRate.toFixed(2)}</p>
              </div>
            </Col>
            <Col lg="3" className="text-center py-3">
              <div className="cart-icon" onClick={handleShowCart}>
                <FaShoppingCart />
              </div>
            </Col>
          </Row>
        </Container>

        <div className="table-responsive d-none d-lg-block">
          <Container fluid>
            <Row>
              <Col lg="12">
                <Row>
                  <Col lg="12" className="px-0">
                    <div className="w-100">
                      <table className="table table-bordered">
                        <thead>
                          <tr className="table-head">
                            <th>#</th>
                            <th>Name</th>
                            <th>Pack Content</th>
                            <th>MRP</th>
                            <th>Discount Price</th>
                            <th>Qty</th>
                            <th>Total Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category
                            .filter((cat) => cat.website_active === 1)
                            .map((cat) => {
                              const categoryProducts = filteredProducts.filter(
                                (product) =>
                                  product.category_id === cat.id &&
                                  product.active === 1
                              );
                              if (categoryProducts.length === 0) return null;
                              return (
                                <>
                                  <tr key={cat.id} className="category-bg">
                                    <th colSpan="7">
                                      {cat.category_name}
                                      {cat.discount && cat.discount > 0 ? (
                                        <span className="discount_percentage">
                                          ({cat.discount}% Discount)
                                        </span>
                                      ) : (
                                        ""
                                      )}{" "}
                                    </th>
                                  </tr>
                                  {categoryProducts.map((product, index) => (
                                    <tr key={product.id}>
                                      <td>{index + 1}</td>
                                      <td className="wordbreak">
                                        <div className="d-flex align-items-center product-img-name py-0 px-0">
                                          <div className="product-img">
                                            {product.img ? (
                                              <img
                                                src={product.img}
                                                alt={product.name}
                                                className="img-fluid"
                                                onClick={() =>
                                                  handleShow(product)
                                                }
                                              />
                                            ) : (
                                              <img
                                                src={require("../../assets/images/storelogo.png")}
                                                alt="Placeholder"
                                                className="img-fluid"
                                              />
                                            )}
                                          </div>
                                          <div className="px-3 bold">
                                            {product.product_name}
                                          </div>
                                        </div>
                                      </td>
                                      <td className="hide-small bold">
                                        <div className="product-content">
                                          {product.product_content}
                                        </div>
                                      </td>
                                      <td>
                                        <div className="net_rate py-1">
                                          ₹<span>{product.price}</span>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="discount_rate py-1">
                                          ₹
                                          <span>
                                            {product.discount_lock === 0
                                              ? (
                                                  product.price -
                                                  (product.price *
                                                    (cat.discount || 0)) /
                                                    100
                                                ).toFixed(2)
                                              : product.price}
                                          </span>
                                        </div>
                                      </td>
                                      <td>
                                        <Calc className="py-3">
                                          <Buttons
                                            className="mx-2"
                                            label={<FaMinus />}
                                            onClick={() => {
                                              if (product.qty > 0) {
                                                updateQuantity(product.id, -1);
                                                addToCart({
                                                  id: product.id,
                                                  name: product.product_name,
                                                  total_price: product.price,
                                                  qty: product.qty - 1,
                                                  discount: cat.discount,
                                                  category_id:
                                                    product.category_id,
                                                  per_price:
                                                    product.discount_lock === 0
                                                      ? (
                                                          product.price -
                                                          (product.price *
                                                            (cat.discount ||
                                                              0)) /
                                                            100
                                                        ).toFixed(2)
                                                      : product.price,
                                                  product_content:
                                                    product.product_content,
                                                  img: product.img || null,
                                                  action: actionvalue,
                                                });
                                              }
                                            }}
                                          />
                                          <Input
                                            className="bold"
                                            value={product.qty}
                                            readOnly
                                          />
                                          <Buttons
                                            className="mx-2"
                                            label={<FaPlus />}
                                            onClick={() => {
                                              addToCart({
                                                id: product.id,
                                                name: product.product_name,
                                                total_price: product.price,
                                                qty: product.qty + 1,
                                                discount: cat.discount,
                                                category_id:
                                                  product.category_id,
                                                per_price:
                                                  product.discount_lock === 0
                                                    ? (
                                                        product.price -
                                                        (product.price *
                                                          (cat.discount || 0)) /
                                                          100
                                                      ).toFixed(2)
                                                    : product.price,
                                                product_content:
                                                  product.product_content,
                                                img: product.img || null,
                                              });
                                              updateQuantity(product.id, 1);
                                            }}
                                          />
                                        </Calc>
                                      </td>
                                      <td>
                                        <div className="total_price bold">
                                          <Input2
                                            value={(
                                              (product.discount_lock === 0
                                                ? product.price -
                                                  (product.price *
                                                    (cat.discount || 0)) /
                                                    100
                                                : product.price) * product.qty
                                            ).toFixed(2)}
                                            readOnly
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* Mobile View */}
      <div className="d-block d-lg-none">
        {selectedCategory === "all"
          ? category.map((categoryItem) => {
              const categoryProducts = filteredProducts.filter(
                (product) => product.category_id === categoryItem.id
              );
              if (categoryProducts.length === 0) return null;
              return (
                <div key={categoryItem.id} className="table-responsive">
                  <Category>
                    <Container>
                      <Row>
                        <Col lg="12">
                          <div className="category-bg">
                            {categoryItem.category_name}
                            {categoryItem.discount &&
                            categoryItem.discount > 0 ? (
                              <span className="discount_percentage">
                                ({categoryItem.discount}% Discount)
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Category>
                  <Container fluid>
                    <Row>
                      {categoryProducts.map((product) => (
                        <Col lg="4" md="6" className="paxpad" key={product.id}>
                          <div className="d-flex justify-content-center product-card w-100">
                            <div className="align-self-center w-25 i">
                              <div
                                className="product-img"
                                onClick={() => handleShow(product)}
                              >
                                <img
                                  src={
                                    product.img
                                      ? product.img
                                      : require("../../assets/images/storelogo.png")
                                  }
                                  className="img-fluid"
                                  alt="product"
                                />
                              </div>
                            </div>
                            <div className="w-50">
                              <div className="product-name bold">
                                {product.name}
                              </div>
                              <div className="text-center bold">
                                <span className="product-content">
                                  {product.product_content}
                                </span>
                              </div>
                              <div className="text-center">
                                <span className="net_rate_only">
                                  {product.discount_lock !== null &&
                                  product.discount_lock === 1 ? (
                                    <>
                                      ₹<span>{Math.round(product.price)}</span>
                                    </>
                                  ) : (
                                    ""
                                  )}
                                </span>
                              </div>
                              <div className="float-left w-50 d-flex">
                                <div className="float-left left-margin w-50">
                                  {product.discount_lock === 0 ? (
                                    <>
                                      <span className="net_rate">
                                        ₹
                                        <span>{Math.round(product.price)}</span>
                                      </span>
                                      <div>
                                        <span className="discount_rate">
                                          ₹
                                          <span>
                                            {product.discount_lock !== null &&
                                            product.discount_lock === 0
                                              ? (
                                                  product.price -
                                                  (product.price *
                                                    (categoryItem.discount ||
                                                      0)) /
                                                    100
                                                ).toFixed(2)
                                              : Math.round(product.price)}
                                          </span>
                                        </span>
                                      </div>
                                    </>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                            <Calc className="py-3 w-25">
                              <Buttons
                                className="mx-2"
                                label={<FaMinus />}
                                onClick={() => {
                                  if (product.qty > 0) {
                                    updateQuantity(product.id, -1);
                                    addToCart({
                                      id: product.id,
                                      name: product.name,
                                      total_price: Math.round(product.price),
                                      qty: product.qty - 1,
                                      discount: categoryItem.discount,
                                      discount_lock: product.discount_lock,
                                      category_id: product.category_id,
                                      per_price:
                                        product.discount_lock !== null &&
                                        product.discount_lock === 0
                                          ? (
                                              product.price -
                                              (product.price *
                                                (categoryItem.discount || 0)) /
                                                100
                                            ).toFixed(2)
                                          : Math.round(product.price),
                                      product_content: product.product_content,
                                      img: product.img || null,
                                      action: actionvalue,
                                    });
                                  }
                                }}
                              />
                              <div className="">
                                <Input
                                  placeholder="Qty"
                                  value={product.qty}
                                  readOnly
                                />
                              </div>
                              <Buttons
                                className="mx-2"
                                label={<FaPlus />}
                                onClick={() => {
                                  addToCart({
                                    id: product.id,
                                    name: product.name,
                                    total_price: Math.round(product.price),
                                    qty: product.qty + 1,
                                    discount_lock: product.discount_lock,
                                    discount: categoryItem.discount,
                                    category_id: product.category_id,
                                    per_price:
                                      product.discount_lock !== null &&
                                      product.discount_lock === 0
                                        ? (
                                            product.price -
                                            (product.price *
                                              (categoryItem.discount || 0)) /
                                              100
                                          ).toFixed(2)
                                        : Math.round(product.price),
                                    product_content: product.product_content,
                                    img: product.img || null,
                                  });
                                  updateQuantity(product.id, 1);
                                }}
                              />
                            </Calc>
                            <div className="pricebox">
                              <span className="price_rate">
                                ₹
                                <span>
                                  {(
                                    (product.discount_lock !== null &&
                                    product.discount_lock === 0
                                      ? product.price -
                                        (product.price *
                                          (categoryItem.discount || 0)) /
                                          100
                                      : Math.round(product.price)) * product.qty
                                  ).toFixed(2)}
                                </span>
                              </span>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Container>
                </div>
              );
            })
          : category
              .filter((cat) => cat.id === selectedCategory)
              .map((categoryItem) => {
                const categoryProducts = filteredProducts.filter(
                  (product) => product.category_id === categoryItem.id
                );
                if (categoryProducts.length === 0) return null;
                return (
                  <div key={categoryItem.id} className="table-responsive">
                    <Category>
                      <Container>
                        <Row>
                          <Col lg="12">
                            <div className="category">
                              {categoryItem.category_name}
                              {categoryItem.discount &&
                              categoryItem.discount > 0 ? (
                                <span className="discount_percentage">
                                  ({categoryItem.discount}% Discount)
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </Category>
                    <Container fluid>
                      <Row>
                        {categoryProducts.map((product) => (
                          <Col
                            lg="4"
                            md="6"
                            className="paxpad"
                            key={product.id}
                          >
                            <div className="d-flex justify-content-center product-card w-100">
                              <div className="align-self-center w-25 i">
                                <div
                                  className="product-img"
                                  onClick={() => handleShow(product)}
                                >
                                  <img
                                    src={
                                      product.img
                                        ? product.img
                                        : require("../../assets/images/storelogo.png")
                                    }
                                    className="img-fluid"
                                    alt="product"
                                  />
                                </div>
                              </div>
                              <div className="w-50">
                                <div className="product-name regular">
                                  {product.product_name}
                                </div>
                                <div className="text-center regular">
                                  <span className="product-content">
                                    {product.product_content}
                                  </span>
                                </div>
                                <div className="text-center">
                                  <span className="net_rate_only">
                                    {product.discount_lock !== null &&
                                    product.discount_lock === 1 ? (
                                      <>
                                        ₹
                                        <span>{Math.round(product.price)}</span>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                  </span>
                                </div>
                                <div className="float-left w-50 d-flex">
                                  <div className="float-left left-margin w-50">
                                    {product.discount_lock === 0 ? (
                                      <>
                                        <span className="net_rate">
                                          ₹
                                          <span>
                                            {Math.round(product.price)}
                                          </span>
                                        </span>
                                        <div>
                                          <span className="discount_rate">
                                            ₹
                                            <span>
                                              {product.discount_lock !== null &&
                                              product.discount_lock === 0
                                                ? (
                                                    product.price -
                                                    (product.price *
                                                      (categoryItem.discount ||
                                                        0)) /
                                                      100
                                                  ).toFixed(2)
                                                : Math.round(product.price)}
                                            </span>
                                          </span>
                                        </div>
                                      </>
                                    ) : null}
                                  </div>
                                </div>
                              </div>
                              <Calc className="py-3 w-25">
                                <Buttons
                                  className="mx-2"
                                  label={<FaMinus />}
                                  onClick={() => {
                                    if (product.qty > 0) {
                                      updateQuantity(product.id, -1);
                                      addToCart({
                                        id: product.id,
                                        name: product.name,
                                        total_price: Math.round(product.price),
                                        qty: product.qty - 1,
                                        discount: categoryItem.discount,
                                        discount_lock: product.discount_lock,
                                        category_id: product.category_id,
                                        per_price:
                                          product.discount_lock !== null &&
                                          product.discount_lock === 0
                                            ? (
                                                product.price -
                                                (product.price *
                                                  (categoryItem.discount ||
                                                    0)) /
                                                  100
                                              ).toFixed(2)
                                            : Math.round(product.price),
                                        product_content:
                                          product.product_content,
                                        img: product.img || null,
                                        action: actionvalue,
                                      });
                                    }
                                  }}
                                />
                                <div className="">
                                  <Input
                                    placeholder="Qty"
                                    value={product.qty}
                                    readOnly
                                  />
                                </div>
                                <Buttons
                                  className="mx-2"
                                  label={<FaPlus />}
                                  onClick={() => {
                                    addToCart({
                                      id: product.id,
                                      name: product.name,
                                      total_price: Math.round(product.price),
                                      qty: product.qty + 1,
                                      discount_lock: product.discount_lock,
                                      discount: categoryItem.discount,
                                      category_id: product.category_id,
                                      per_price:
                                        product.discount_lock !== null &&
                                        product.discount_lock === 0
                                          ? (
                                              product.price -
                                              (product.price *
                                                (categoryItem.discount || 0)) /
                                                100
                                            ).toFixed(2)
                                          : Math.round(product.price),
                                      product_content: product.product_content,
                                      img: product.img || null,
                                    });
                                    updateQuantity(product.id, 1);
                                  }}
                                />
                              </Calc>
                              <div className="pricebox">
                                <span className="price_rate">
                                  ₹
                                  <span>
                                    {(product.discount_lock !== null &&
                                    product.discount_lock === 0
                                      ? (
                                          product.price -
                                          (product.price *
                                            (categoryItem.discount || 0)) /
                                            100
                                        ).toFixed(2)
                                      : Math.round(product.price)) *
                                      product.qty}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Container>
                  </div>
                );
              })}
      </div>

      <>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="regular">
                {" "}
                {selectedProduct && selectedProduct.name}
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="mx-auto">
            <table>
              <tbody>
                <tr>
                  <td className="text-center image_video" colSpan="2">
                    <div className="text-center mx-auto w-25">
                      {selectedProduct &&
                        (selectedProduct.img ? (
                          <img
                            src={selectedProduct.img}
                            className="img-fluid"
                            alt="Product"
                          />
                        ) : (
                          <img
                            src={require("../../assets/images/storelogo.png")}
                            className="img-fluid"
                            alt="Product Placeholder"
                          />
                        ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <table>
              <tbody>
                <tr>
                  {selectedProduct && selectedProduct.img && (
                    <td>
                      <div className="dual">
                        <img
                          src={selectedProduct.img}
                          className="img-fluid"
                          alt="product"
                        />
                      </div>
                    </td>
                  )}
                  {selectedProduct && selectedProduct.video_url && (
                    <td>
                      <div className="w-25 mx-auto">
                        <div
                          className="play-icon"
                          onClick={handleVideoModalShow}
                        >
                          <FaPlay />
                        </div>
                      </div>
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </Modal.Footer>
        </Modal>
        {showVideoModal && (
          <Modal show={showVideoModal} onHide={handleVideoModalClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>
                {selectedProduct && selectedProduct.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${extractVideoId(
                  selectedProduct.video_url
                )}`}
                frameBorder="0"
                allowFullScreen
                title="Product Video"
              />
            </Modal.Body>
          </Modal>
        )}
      </>
      {/* Product Modal end */}
      {/* cart table start */}
      <Offcanvas
        show={showCart}
        onHide={handleCloseCart}
        scroll="true"
        placement="end"
      >
        <PageTitle onClick={handleCloseCart} title={companydata.company_name} />
        <Offcanvas.Body>
          <div className="canvas-table regular">
            <div className="cart-table">
              <BootstrapTable>
                <tbody>
                  {cart.map((cart) => (
                    <tr key={cart.id}>
                      <td className="w-75">
                        <div className="product-name pb-2">{cart.name}</div>
                        <div className="qty-box">
                          <input
                            className="form-cntrl form-control"
                            value={cart.qty}
                            readOnly
                          />
                        </div>
                      </td>
                      <td className="text-end">
                        <div className="pb-2">
                          {" "}
                          <Close
                            label={
                              <>
                                <FaTimes />
                              </>
                            }
                            onClick={() => removeProduct(cart.id)}
                          />{" "}
                        </div>
                        <div className="price_total">
                          ₹<span>{cart.total_price}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </BootstrapTable>
            </div>
          </div>
          <div className="bottom-table">
            <BootstrapTable>
              <tr>
                <td>
                  <tr>
                    <td className="w-100"> Net rate :</td>
                    <td>
                      {" "}
                      ₹<span>{totals.overallTotal.toFixed(2)}</span>
                    </td>
                  </tr>
                </td>
              </tr>
              <tr>
                <td>
                  <tr>
                    <td className="w-100"> Discount Total :</td>
                    <td>
                      {" "}
                      ₹<span>{totals.discountRate.toFixed(2)}</span>
                    </td>
                  </tr>
                </td>
              </tr>
              <tr>
                <td>
                  <tr>
                    <td className="w-100"> Overall Total :</td>
                    <td>
                      {" "}
                      ₹<span>{totals.discountRate.toFixed(2)}</span>
                    </td>
                  </tr>
                </td>
              </tr>
            </BootstrapTable>
          </div>
          <div className="text-center">
            {totals.discountRate >= "3000" && (
              <div className="text-center regular py-3">
                <Buttons
                  label={<>Confirm Estimate</>}
                  fullWidth={"100%"}
                  onClick={() => {
                    showOut();
                    handleCloseCart();
                  }}
                ></Buttons>
              </div>
            )}

            <div className="py-2">
              Min Order : ₹<span>3000</span>
            </div>
          </div>
          {/* New Terms and Conditions Section */}
          <div className="terms-section mt-4 p-3 bg-light rounded">
            <h5 className="bold mb-3">Terms and Conditions</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <strong>Minimum order value:</strong> 3000/-
              </li>
              <li className="mb-2">
                <strong>Transportation charges:</strong> Extra
              </li>
              <li className="mb-2">
                <strong>Delivery time:</strong> Tamil Nadu - 4 days, Other - 10
                days
              </li>
              <li className="mb-2">
                <strong>Validity:</strong> This price list valid up to October
                1st 2025
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* cart table end */}
      {/* customer details start */}
      <>
        <Offcanvas show={checkout} scroll="true" placement="end">
          <PageTitle onClick={closeOut} title={companydata.company_name} />
          <Offcanvas.Body>
            <div className="customer-details regular">
              <div className="canvas-table regular">
                <Container>
                  <Row>
                    <Col lg="12" className="py-2">
                      <DropDowns
                        options={Object.keys(districtData).map((state) => ({
                          value: state,
                          label: state,
                        }))}
                        placeholder={"Select State"}
                        label={"Select State"}
                        name="state"
                        value={{ value: formData.state, label: formData.state }}
                        onChange={handleStateChange}
                      />
                    </Col>
                    <Col lg="12" className="py-2">
                      <DropDowns
                        options={cityOptions}
                        placeholder={"Select City"}
                        label={"Select City"}
                        name="city"
                        value={{ value: formData.city, label: formData.city }}
                        onChange={handleCityChange}
                      />
                    </Col>
                    <Col lg="12" className="py-2">
                      <Forms
                        placeholder={"Enter the name"}
                        label={"Enter the Name"}
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleChange(e, "name")}
                      />
                    </Col>
                    <Col lg="12" className="py-2">
                      <Forms
                        placeholder={"Enter the Mail"}
                        label={"Enter the Mail"}
                        name="email"
                        value={formData.email}
                        onChange={(e) => handleChange(e, "email")}
                      />
                    </Col>
                    <Col lg="12" className="py-2">
                      <Forms
                        placeholder={"Mobile No."}
                        label={"Mobile No."}
                        name="mobile"
                        value={formData.mobile}
                        onChange={(e) => handleChange(e, "mobile")}
                      />
                    </Col>
                    <Col lg="12" className="py-2">
                      <div className="py-2">
                        {" "}
                        <label> Address</label>
                      </div>
                      <textarea
                        placeholder="Address"
                        className="w-100"
                        name="address"
                        value={formData.address}
                        onChange={(e) => handleChange(e, "address")}
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="bottom-table">
                <BootstrapTable>
                  <tr>
                    <td>
                      <tr>
                        <td className="w-100"> Net rate :</td>
                        <td>
                          {" "}
                          ₹<span>{totals.overallTotal.toFixed(2)}</span>
                        </td>
                      </tr>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <tr>
                        <td className="w-100"> Discount Total :</td>
                        <td>
                          {" "}
                          ₹<span>{totals.discountRate.toFixed(2)}</span>
                        </td>
                      </tr>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <tr>
                        <td className="w-100"> Overall Total :</td>
                        <td>
                          {" "}
                          ₹<span>{totals.discountRate.toFixed(2)}</span>
                        </td>
                      </tr>
                    </td>
                  </tr>
                </BootstrapTable>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="text-center regular py-3 w-100 mx-2">
                  <Buttons
                    label={<>Submit</>}
                    className="w-100"
                    fullWidth={"100%"}
                    onClick={handleSubmit}
                    onHide={closeOut}
                  ></Buttons>
                </div>
                <div className="text-center regular py-3 w-100 mx-2">
                  <Buttons
                    label={<>Cancel</>}
                    fullWidth={"100%"}
                    onClick={closeOut}
                  ></Buttons>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
      {/* customer details end */}
      {/* order preview modal start*/}
      <>
        <Modal
          show={showEstimate}
          onClick={closeModal}
          centered
          className="regular"
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title className="bold">Order Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container fluid>
              <Row>
                <Col lg="12">
                  <div className="text-center py-3">
                    <div> {companydata.company_name}</div>
                    <div>{companydata.address}</div>
                    <div> Phone No :{companydata.phone}</div>
                  </div>
                  <div className="text-center">Estimated Successfully</div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <PDFDownloadLink
              document={<Bill data={printData} />}
              fileName="estimate.pdf"
            >
              <Buttons label={<>Download PDF</>} onClick={closeModal} />
            </PDFDownloadLink>
          </Modal.Footer>
        </Modal>
      </>
      {/* order preview modal end*/}
    </>
  );
};

export default CardThree;

const StyledTable = styled(BootstrapTable)`
  margin-bottom: 0 !important;
  background-color: #6482ad;
  border: 0;
  border-color: #6482ad;
  color: #fff;
  font-family: "regular";
  & th,
  & td {
    text-align: center;
    background-color: #6482ad;
    vertical-align: middle;
    color: #fff;
  }
`;
const Category = styled.div`
  background-color: #0c1c49;
  border: 0;
  border-color: #0c1c49;
  color: white;
  text-align: center;
  padding: 10px 0;
  font-size: 18px;
  font-family: "bold";
`;
const Calc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  border: none;
  outline: none;
  padding: 4px;
  width: 50px;
  text-align: center;
  background: transparent;
`;
const Input2 = styled.input`
  border: none;
  outline: none;
  padding: 4px;
  width: 50%;
  text-align: center;
  background: transparent;
`;
