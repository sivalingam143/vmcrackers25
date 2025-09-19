import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  Table as BootstrapTable,
  Modal,
  Offcanvas,
} from "react-bootstrap";
import { FaPlay, FaShoppingCart, FaTimes } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Buttons, Close } from "../../components/Buttons/Buttons";
import PageTitle from "../../components/Buttons/PageTitle";
import { Forms, DropDowns } from "../../components/Forms";
import API_DOMAIN from "../../config/config";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ButtonView } from "../../components/Buttons/Buttons";
import Bill from "../../pdf/Bill";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./productcardtwo.css";

const ProductCardTwo = ({
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
  const closeOut = () => setCheckOut(false);
  const showOut = () => setCheckOut(true);
  const [showEstimate, setShowEstimate] = useState(false);
  const closeModal = () => {
    window.location.reload();
    setShowEstimate(false);
  };
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
  const [printData, setPrintData] = useState([]);
  console.log("printData", printData);
  console.log("setPrintData", setPrintData);
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

  const handleSubmit = () => {
    if (
      !formData.mobile ||
      formData.mobile.trim() === "" ||
      !formData.name ||
      formData.name.trim() === ""
    ) {
      toast.error("Mobile number And Name cannot be empty!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else {
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
    }
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

  // const chunkData = (data, chunkSize) => {
  //   let chunks = [];
  //   for (let i = 0; i < data.length; i += chunkSize) {
  //     chunks.push(data.slice(i, i + chunkSize));
  //   }
  //   return chunks;
  // };

  // const printChunks = chunkData(printData, 10);
  const actionvalue = "minus";
  return (
    <div>
      <>
        {/* <Container fluid className="stick-top">
          <Row>
            <Col lg="12" className="p-0">
              <StyledTable>
                <thead>
                  <tr>
                    <th>Total Products : {totals.totalProducts}</th>
                    <th>
                      MRP Rate Total :{" "}
                      {Math.round(totals.overallTotal.toFixed(2))}
                    </th>
                    <th>
                      Discount with Total (
                      {category.length > 0 ? category[0].discount : "N/A"}%) :
                      {Math.round(totals.discountRate * 100) / 100}
                    </th>

                    <th>
                      <div className="cart-icon" onClick={handleShowCart}>
                        <FaShoppingCart />
                      </div>
                    </th>
                  </tr>
                </thead>
              </StyledTable>
            </Col>
          </Row>
        </Container> */}
      </>

      {category.map((categoryItem) => (
        <div key={categoryItem.id}>
          <Category>
            <Container>
              <Row>
                <Col lg="12">
                  <div className="category">
                    {categoryItem.category_name}
                    {categoryItem.discount && categoryItem.discount > 0 ? (
                      <span className="discount_percentage">
                        ({categoryItem.discount}% Discount)
                      </span>
                    ) : (
                      ""
                    )}{" "}
                  </div>
                </Col>
              </Row>
            </Container>
          </Category>

          <Container fluid>
            <Row>
              {products
                .filter((product) => product.category_id === categoryItem.id)
                .map((product) => (
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
                      <div className="w-75">
                        <div className="product-name regular">
                          {" "}
                          {product.product_name}
                        </div>
                        <div className="text-center regular">
                          <span className="product-content">
                            {" "}
                            {product.product_content}
                          </span>
                        </div>
                        {/* if there is conditional rendering only net_rate_only */}
                        <div className="text-center">
                          <span className="net_rate_only">
                            {" "}
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
                        {/* if there is conditional rendering only net_rate */}
                        {/* if there is conditional rendering apply discount show net_rate & discount_rate */}
                        <div className="float-left w-100 d-flex">
                          <div className="float-left left-margin w-50">
                            {product.discount_lock === 0 ? (
                              <>
                                <span className="net_rate">
                                  ₹<span>{Math.round(product.price)}</span>
                                </span>
                                <div>
                                  <span className="discount_rate">
                                    ₹
                                    <span>
                                      {product.discount_lock !== null &&
                                      product.discount_lock === 0
                                        ? Math.round(
                                            product.price -
                                              (product.price *
                                                categoryItem.discount) /
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
                        {/* if there is conditional rendering apply discount show net_rate & discount_rate */}
                      </div>
                      <Calc className="py-3 ">
                        <Buttons
                          className="mx-2"
                          label={
                            <>
                              <FaMinus />
                            </>
                          }
                          onClick={() => {
                            if (product.qty > 0) {
                              updateQuantity(product.id, -1);
                              addToCart({
                                id: product.id,
                                name: product.product_name,
                                total_price: Math.round(product.price),
                                qty: product.qty - 1,
                                discount: categoryItem.discount,
                                discount_lock: product.discount_lock,
                                category_id: product.category_id,
                                // per_price:
                                //   product.discount_lock !== null &&
                                //   product.discount_lock === 0
                                //     ? Math.round(
                                //         product.price -
                                //           (product.price *
                                //             categoryItem.discount) /
                                //             100
                                //       ).toFixed(2)
                                //     : Math.round(product.price),
                                per_price:
                                  product.discount_lock !== null &&
                                  product.discount_lock === 0
                                    ? Math.round(product.price)
                                    : Math.round(product.price),

                                product_content: product.product_content,
                                img: product.img || null,
                                action: actionvalue,
                              });
                              console.log("addToCart", addToCart);
                            }
                          }}
                        />

                        <div className="mx-2">
                          <Input
                            placeholder="Qty"
                            value={product.qty}
                            readOnly
                          />
                        </div>
                        <Buttons
                          className="mx-2"
                          label={
                            <>
                              <FaPlus />
                            </>
                          }
                          onClick={() => {
                            addToCart({
                              id: product.id,
                              name: product.product_name,
                              total_price: Math.round(product.price),
                              qty: product.qty + 1,
                              discount_lock: product.discount_lock,
                              discount: categoryItem.discount,
                              category_id: product.category_id,
                              // per_price:
                              //   product.discount_lock !== null &&
                              //   product.discount_lock === 0
                              //     ? Math.round(
                              //         product.price -
                              //           (product.price *
                              //             categoryItem.discount) /
                              //             100
                              //       ).toFixed(2)
                              //     : Math.round(product.price),
                              per_price:
                                product.discount_lock !== null &&
                                product.discount_lock === 0
                                  ? Math.round(product.price)
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
                            {" "}
                            {(product.discount_lock !== null &&
                            product.discount_lock === 0
                              ? Math.round(
                                  product.price -
                                    (product.price * categoryItem.discount) /
                                      100
                                ).toFixed(2)
                              : Math.round(product.price)) *
                              product.qty.toFixed(2)}
                          </span>
                        </span>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
      ))}
      <div className="padding text-center">
        <h2 className="bold  pb-3"> Thank You Reaching Us</h2>
        <ButtonView
          label={<>PLEASE CHECK YOUR ORDER</>}
          onClick={handleShowCart}
          className="check-order-btn"
        />
      </div>

      <>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <div> {selectedProduct && selectedProduct.product_name}</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table>
              <tbody>
                <tr>
                  <td class="text-center image_video" colspan="2">
                    <div className="modal-img mx-auto">
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
                            alt="product"
                          />
                        ))}
                    </div>
                  </td>
                </tr>
                {/* if only img upload */}
                {/* <tr>
                  <td colspan="2" className='mx-auto'>
                    <div className='text-center w-25 mx-auto'>
                      <img src={require('../../assets/images/storelogo.png')} className='img-fluid' alt='product' />
                    </div>
                  </td>
                </tr> */}
                {/* if only img upload */}
                {/* if both img or vide upload show  */}
                {/* <tr>
                  <td>
                    <div className=' w-25'>
                      <img src={require('../../assets/images/storelogo.png')} className='img-fluid' alt='product' />
                    </div>
                  </td>
                  <td>
                    <div className=''>
                      <div className=' w-25 play-icon'>
                        <FaPlay />
                      </div>
                    </div>

                  </td>
                </tr> */}
                {/* if both i9mg or vide upload show it working for like tab*/}
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer className="mx-auto">
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
                {selectedProduct && selectedProduct.product_name}
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
      <>
        <Offcanvas
          show={showCart}
          onHide={handleCloseCart}
          scroll="true"
          placement="end"
        >
          <PageTitle
            onClick={handleCloseCart}
            title={companydata.company_name}
            address={companydata.address}
            phone={companydata.phone}
          />
          <Offcanvas.Body>
            <div className="canvas-table">
              <div className="cart-table">
                <BootstrapTable>
                  <tbody>
                    {cart.map((cart) => (
                      <tr key={cart.id}>
                        <td className="w-75">
                          <div className="product-name pb-2">
                            {cart.product_name}
                          </div>
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
                            ₹<span>{Math.round(cart.total_price)}</span>
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
                      <td className="w-100">Total MRP rate :</td>
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
                      <td className="w-100">
                        Total Discount Amount (
                        {category.length > 0 ? category[0].discount : "N/A"}%) :
                      </td>
                      <td>
                        {" "}
                        ₹<span>{totals.discountedOverallTotal.toFixed(2)}</span>
                      </td>
                    </tr>
                  </td>
                </tr>
                <tr>
                  <td>
                    <tr>
                      <td className="w-100">Total Amount :</td>
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
          </Offcanvas.Body>
        </Offcanvas>
      </>
      <>
        <Offcanvas show={checkout} scroll="true" placement="end">
          <PageTitle onClick={closeOut} title={companydata.company_name} />
          <Offcanvas.Body>
            <div className="customer-details">
              <div className="canvas-table">
                <Container>
                  <Row>
                    {/* <Col lg='12' className='py-2'>
                      <DropDowns
                        options={Object.keys(districtData).map(state => ({ value: state, label: state }))}
                        placeholder={"Select State"}
                        label={"Select State"}
                        name="state"
                        value={{ value: formData.state, label: formData.state }}
                        onChange={handleStateChange}
                      />
                    </Col> */}
                    {/* <Col lg='12' className='py-2'>
                      <DropDowns
                        options={cityOptions}
                        placeholder={"Select City"}
                        label={"Select City"}
                        name="city"
                        value={{ value: formData.city, label: formData.city }}
                        onChange={handleCityChange}
                      />
                    </Col> */}
                    <Col lg="12" className="py-2">
                      <Forms
                        placeholder={"Enter the State"}
                        label={"Enter the State"}
                        name="state"
                        value={formData.state}
                        onChange={(e) => handleChange(e, "state")}
                      />
                    </Col>
                    <Col lg="12" className="py-2">
                      <Forms
                        placeholder={"Enter the City"}
                        label={"Enter the City"}
                        name="city"
                        value={formData.city}
                        onChange={(e) => handleChange(e, "city")}
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
                        <td className="w-100">Total MRP rate :</td>
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
                        <td className="w-100">Total Discount Amount (70%) :</td>
                        <td>
                          {" "}
                          ₹
                          <span>
                            {totals.discountedOverallTotal.toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <tr>
                        <td className="w-100">Total Amount :</td>
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
                    <div className="text-center py-3 mx-auto">
                      <div> {companydata.company_name}</div>
                      <div>{companydata.address}</div>
                      <div> Phone No :{companydata.phone}</div>
                    </div>
                    <div className="text-center">Estimated Successfully</div>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer className="mx-auto">
              <PDFDownloadLink
                document={<Bill data={printData} />}
                fileName="estimate.pdf"
              >
                {({ loading }) =>
                  loading ? (
                    <Buttons label={<>Generating PDF...</>} disabled />
                  ) : (
                    <Buttons label={<>Download PDF</>} />
                  )
                }
              </PDFDownloadLink>
            </Modal.Footer>
          </Modal>
        </>
      </>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ProductCardTwo;
const StyledTable = styled(BootstrapTable)`
  margin-bottom: 0 !important;
  background-color: #ff6a00;
  border: 0;
  border-color: #ff6a00;
  font-family: "regular";
  & th,
  & td {
    text-align: center;
    background-color: #ff6a00;
    color: white;
  }
`;
const Category = styled.div`
  background-color: #081e6d;
  border: 0;
  border-color: #081e6d;
  color: white;
  text-align: center;
  padding: 10px;
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
  width: 70px;
  text-align: center;
  background: transparent;
`;
