import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Container, Nav, Navbar, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { IoLocationOutline } from "react-icons/io5";
import {
  MdOutlinePhoneAndroid,
  MdOutlineDashboard,
  MdHealthAndSafety,
} from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { ImPriceTag } from "react-icons/im";
import { RiContactsFill } from "react-icons/ri";
const AppBar = () => {
  return (
    <>
      <>
        <div className="mark-bg">
          <div className="d-lg-block d-none">
            <Container fluid>
              <Row className="py-2">
                <Col
                  lg="4"
                  xs="4"
                  sm="4"
                  className="align-self-center d-lg-block d-none"
                >
                  <div className="d-flex align-items-center">
                    <div>
                      <img
                        src={require("../../assets/images/gpay.png")}
                        className="img-fluid gpay"
                        alt="gpay"
                      />
                    </div>
                    <div className="text-white">
                      <h5 className="bold mt-2 mx-2">63698 09391</h5>
                    </div>
                  </div>
                </Col>
                <Col lg="8" className="align-self-center text-white">
                  <Marquee
                    pauseOnHover={true}
                    direction="left"
                    speed={50}
                    delay={9}
                  >
                    | Whatsapp : +91 63698 09391 | Mobile No : +91 89402 23892 |
                    Phone No : +91 63698 09391 | Email : vmcrackers@gmail.com
                  </Marquee>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="d-lg-none d-block py-3">
            <Container fluid>
              <Row>
                <Col xs="4" sm="4">
                  <a href="https://wa.me/916369809391?text=Hello vmcrackers">
                    <div className="mob-icon mx-auto">
                      <img
                        src={require("../../assets/images/whatsappicon.webp")}
                        className="img-fluid"
                        alt="product name"
                      />
                    </div>
                  </a>
                </Col>
                <Col xs="4" sm="4">
                  <a href="tel:+918940223892">
                    <div className="mob-icon mx-auto">
                      <img
                        src={require("../../assets/images/callicon.webp")}
                        className="img-fluid"
                        alt="product name"
                      />
                    </div>
                  </a>
                </Col>
                <Col xs="4" sm="4">
                  <a href="https://maps.app.goo.gl/oUGR24yDnTNLX2V89" alt="">
                    <div className="mob-icon mx-auto">
                      <img
                        src={require("../../assets/images/googlelocation.png")}
                        className="img-fluid"
                        alt="product name"
                      />
                    </div>
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
      <>
        {/* <div  className='navv-bg bg-overlay'>
        <Container className='py-3 z'>
            <Row>
              <Col lg='4' md='12' xs="12">
                <Navbar.Brand href="/">
                  <div className='logo mx-auto'>
                    <img src={require('../../assets/images/storelogo.png')} className='img-fluid' alt='product name' />
                  </div>
              </Navbar.Brand>
              </Col>
              <Col lg='4' className='align-self-center d-lg-block d-none'>
                <div className='d-flex justify-content-center '>
                    <div></div>
                    <div>
                      <h5 className='bold'> Address</h5>
                      <p className='regular'> 3/1362/30 Bharathi Nagar, Sivakamipuram Colony, <br/>
                      Sivakasi - 626189
                      </p>
                    </div>
                </div>
              </Col>
              <Col lg='4' className='align-self-center d-lg-block d-none'>
                <div className='d-flex justify-content-center '>
                    <div></div>
                    <div class>
                      <h5 className='bold'> Mobile Number</h5>
                        <div className='regular'>
                          <li>+91 9003885080</li>
                          <li>+91 9944726077</li>
                        </div>
                    </div>
                </div>
              </Col>
            </Row>
        </Container>
      </div> */}
      </>

      <>
        <Navbar expand="lg" className=" headnav">
          <Container fluid className="px-lg-5">
            <Navbar.Brand href="/">
              <div className="logo mx-auto">
                <img
                  src={require("../../assets/images/logosm.png")}
                  className="img-fluid"
                  alt="product name"
                />
              </div>
            </Navbar.Brand>
            <div className="mx-auto">
              <Navbar.Toggle aria-controls="basic-navbar-nav mx-auto text-center py-3" />
            </div>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto text-center py-3">
                <Nav.Link as={NavLink} exact to={"/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} exact to={"/about"}>
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} exact to={"/products"}>
                  Pricelist
                </Nav.Link>
                <Nav.Link as={NavLink} exact to={"/safetytips"}>
                  Safety Tips
                </Nav.Link>
                <Nav.Link as={NavLink} exact to={"/contactus"}>
                  Contact
                </Nav.Link>
                {/* <Nav.Link as={NavLink} exact to={"/safetytips"} activeClassName="active">Safety Tips</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/contactus"} activeClassName="active">Contact Us</Nav.Link> */}
              </Nav>
              {/* <Nav.Link as={NavLink} exact to={"/products"} activeClassName="active" className='text-center estimate'>Estimate Now !!!</Nav.Link> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </>
  );
};
const AppBarTwo = () => {
  return (
    <>
      <>
        <div className="mark-bg">
          <div className="d-lg-block d-none">
            <Container fluid>
              <Row className="py-2">
                <Col
                  lg="4"
                  xs="4"
                  sm="4"
                  className="align-self-center d-lg-block d-none"
                >
                  <div className="d-flex align-items-center">
                    <div>
                      <img
                        src={require("../../assets/images/gpay.png")}
                        className="img-fluid gpay"
                        alt="gpay"
                      />
                    </div>
                    <div className="text-white">
                      <h5 className="bold mt-2 mx-2">6369809391</h5>
                    </div>
                  </div>
                </Col>
                <Col lg="8" className="align-self-center text-white">
                  <Marquee
                    pauseOnHover={true}
                    direction="left"
                    speed={50}
                    delay={9}
                  >
                    Whatsapp : +91 63698 09391 | Alter No : +91 89402 23892 |
                    Alter No : +91 63698 09391 | Email : vmcrackers@gmail.com
                  </Marquee>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="d-lg-none d-block py-3">
            <Container fluid>
              <Row>
                <Col xs="4" sm="4">
                  <a href="https://wa.me/916369809391?text=Hello VM Crackers">
                    <div className="mob-icon mx-auto">
                      <img
                        src={require("../../assets/images/whatsappicon.webp")}
                        className="img-fluid"
                        alt="product name"
                      />
                    </div>
                  </a>
                </Col>
                <Col xs="4" sm="4">
                  <a href="tel:+918940223892">
                    <div className="mob-icon mx-auto">
                      <img
                        src={require("../../assets/images/callicon.webp")}
                        className="img-fluid"
                        alt="product name"
                      />
                    </div>
                  </a>
                </Col>
                <Col xs="4" sm="4">
                  <a href="https://maps.app.goo.gl/oUGR24yDnTNLX2V89" alt="">
                    <div className="mob-icon mx-auto">
                      <img
                        src={require("../../assets/images/googlelocation.png")}
                        className="img-fluid"
                        alt="product name"
                      />
                    </div>
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
      <>
        <div className="navlink-bg">
          <Container className="py-3 z">
            <Row>
              <Col lg="4" md="12" xs="12">
                <Navbar.Brand href="/">
                  <div className="logo mx-auto">
                    <img
                      src={require("../../assets/sivasakthicrackersimage/download.png")}
                      className="img-fluid"
                      alt="product name"
                    />
                  </div>
                </Navbar.Brand>
              </Col>
              <Col lg="4" className="align-self-center d-lg-block d-none">
                <div className="d-flex justify-content-center ">
                  <div className="me-3">
                    <IoLocationOutline size={45} color="white" />
                  </div>
                  <div>
                    <h5 className="bold text-white"> Address</h5>
                    <p className="regular text-white">
                      Kazhugumalai Main Road , Vembakottai
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" className="align-self-center d-lg-block d-none">
                <div className="d-flex justify-content-center ">
                  <div className="me-3">
                    <MdOutlinePhoneAndroid size={45} color="white" />
                  </div>
                  <div class>
                    <h5 className="bold text-white"> Mobile Number</h5>
                    <div className="regular text-white">
                      <li>+91 63698 09391</li>
                      <li>+91 89402 23892</li>
                      <li>+91 63698 09391</li>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>

      <>
        <Navbar expand="lg" className="nav-pad nav-bg">
          <Container className="px-lg-5">
            <div className="mx-auto">
              <Navbar.Toggle aria-controls="basic-navbar-nav mx-auto text-center py-3" />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto text-center">
                <Nav.Link as={NavLink} exact to={"/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} exact to={"/about"}>
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} exact to={"/products"}>
                  Pricelist
                </Nav.Link>
                <Nav.Link as={NavLink} exact to={"/safetytips"}>
                  Safety Tips
                </Nav.Link>
                <Nav.Link as={NavLink} exact to={"/contactus"}>
                  Contact
                </Nav.Link>
                {/* <Nav.Link as={NavLink} exact to={"/safetytips"} activeClassName="active">Safety Tips</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/contactus"} activeClassName="active">Contact Us</Nav.Link> */}
              </Nav>
              {/* <Nav.Link as={NavLink} exact to={"/products"} activeClassName="active" className='text-center estimate'>Estimate Now !!!</Nav.Link> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </>
  );
};
const AppBarThree = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);

  const handleShow = (app) => {
    setSelectedApp(app);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedApp(null);
  };

  const qrCodes = {
    gpay: require("../../assets/images/gpay2.jpeg"),
    phonepe: require("../../assets/images/phonepae.jpeg"),
  };
  return (
    <>
      <>
        <div className="mark-bg">
          <div className="d-lg-block d-none">
            <Container fluid>
              <Row className="py-0">
                <Col
                  lg="4"
                  xs="4"
                  sm="4"
                  className="align-self-center d-lg-block d-none"
                >
                  <div className="d-flex align-items-center">
                    <div>
                      <img
                        src={require("../../assets/images/Gpay.jpg")}
                        alt="GPay"
                        style={{
                          width: "50px",
                          cursor: "pointer",
                          borderRadius: "50px",
                          marginRight: "10px",
                        }}
                        onClick={() => handleShow("gpay")}
                      />

                      <img
                        src={require("../../assets/images/Phonepay.png")}
                        alt="PhonePe"
                        style={{
                          width: "50px",
                          cursor: "pointer",
                          borderRadius: "50px",
                        }}
                        onClick={() => handleShow("phonepe")}
                      />
                    </div>
                    <>
                      <Modal show={showModal} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                          {selectedApp === "gpay" && "GPay QR Code"}
                          {selectedApp === "phonepe" && "PhonePe QR Code"}
                        </Modal.Header>
                        <Modal.Body
                          className="text-center"
                          style={{ height: "450px" }}
                        >
                          {selectedApp && qrCodes[selectedApp] && (
                            <img
                              src={qrCodes[selectedApp]}
                              alt={`${selectedApp} QR`}
                              style={{ width: "100%", height: "400px" }}
                            />
                          )}
                          ;
                        </Modal.Body>
                        <Modal.Footer className="d-flex justify-content-center">
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </>
                    <div className=" d-lg-block d-none ">
                      <h5 className="bold mt-2 mx-2">63698 09391</h5>
                    </div>
                  </div>
                </Col>
                <Col lg="8" className="align-self-center ">
                  <Marquee
                    pauseOnHover={true}
                    direction="left"
                    speed={50}
                    delay={9}
                  >
                    💥 "வெடி வெடிக்க வேண்டாமா? அப்போ நேரா வா – சிவகாசி VM
                    Crackers Shop கு வா! சலுகை கண்ணை மூட வைக்கும், விலை பைய
                    எடுத்துவைக்கும்!" 🎆 "ஒரே ஷாப்புல வாங்குறீங்க, அனைத்து வகை
                    வெடிகளும் கிடைக்குது! தீபாவளிக்கு தீபமா வெடிக்கணும்னா – VM
                    கு வா தம்பி!"(63698 09391)
                  </Marquee>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <>
          <div
            className="d-lg-none d-block py-3 align-self-center"
            style={{
              backgroundColor: "#feba17",
            }}
          >
            <Container
              fluid
              className="d-flex "
              style={{
                width: "100%",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {/* <a href="https://wa.me/918940655143?text=Hello Sri Senthur Murugan fireworks">
                <div className="mob-icon mx-auto">
                  <img
                    src={require("../../assets/images/whatsappicon.webp")}
                    className="img-fluid"
                    alt="product name"
                  />
                </div>
              </a> */}

              <div className="d-flex align-items-center">
                <div>
                  <Row style={{ width: "100vw" }}>
                    <Col
                      xs={4}
                      sm={4}
                      className="d-flex justify-content-start align-items-center"
                    >
                      <div style={{ marginRight: "10px" }}>
                        <img
                          src={require("../../assets/images/Gpay.jpg")}
                          alt="GPay"
                          className="img-fluid"
                          style={{
                            width: "60px",
                            cursor: "pointer",
                            borderRadius: "50px",
                          }}
                          onClick={() => handleShow("gpay")}
                        />
                      </div>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <div
                        style={{
                          fontSize: "17px",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        63698 09391
                      </div>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      className="d-flex justify-content-end align-items-center"
                    >
                      <div style={{ marginLeft: "10px" }}>
                        <img
                          src={require("../../assets/images/Phonepay.png")}
                          alt="PhonePe"
                          className="img-fluid"
                          style={{
                            width: "60px",
                            cursor: "pointer",
                            borderRadius: "50px",
                          }}
                          onClick={() => handleShow("phonepe")}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <>
                  <Modal show={showModal} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                      {selectedApp === "gpay" && "GPay QR Code"}
                      {selectedApp === "phonepe" && "PhonePe QR Code"}
                    </Modal.Header>
                    <Modal.Body
                      className="text-center"
                      style={{ height: "450px" }}
                    >
                      {selectedApp && qrCodes[selectedApp] && (
                        <img
                          src={qrCodes[selectedApp]}
                          alt={`${selectedApp} QR`}
                          style={{ width: "100%", height: "400px" }}
                        />
                      )}
                      ;
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              </div>

              {/*<Col xs="4" sm="4">
                  <a href="tel:+918940655143">
                    <div className="mob-icon mx-auto">
                      <img
                        src={require("../../assets/images/callicon.webp")}
                        className="img-fluid"
                        alt="product name"
                      />
                    </div>
                  </a>
                </Col>*/}
              {/*<Col xs="4" sm="4">
                  <a href="https://maps.app.goo.gl/A66cTebzzfAq56QdA" alt="">
                    <div className="mob-icon mx-auto">
                      <img
                        src={require("../../assets/images/googlelocation.png")}
                        className="img-fluid"
                        alt="product name"
                      />
                    </div>
                  </a>
                </Col>*/}
            </Container>
          </div>
        </>
        <>
          <div className="bg-img bg-overlay">
            <Container fluid className="py-3 z">
              <Row>
                <Col lg="2" className="text-center">
                  <div className="mx-3 ">
                    <img
                      style={{
                        width: "150px",
                      }}
                      src={require("../../assets/images/Logo_updated-01.png")}
                      alt="company-logo"
                    />
                  </div>
                </Col>
                <Col lg="4">
                  <Navbar.Brand href="/">
                    <div className="logo company-name-head  mt-3">
                      <h2 className="logo-head-ft">
                        VM CRACKERS
                        <br />
                      </h2>
                      <hr className="logo-head-ul" />
                      <h6 className="logo-head-sd">
                        Best Quality Crackers @ Whole Sale Price
                      </h6>
                    </div>
                  </Navbar.Brand>
                </Col>
                <Col lg="6" className="d-lg-block d-none py-5">
                  <Navbar expand="lg" className="nav-bg">
                    <Container>
                      <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav  text-center " />
                      </div>
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" text-center">
                          <Nav.Link as={NavLink} exact to={"/home"}>
                            Home
                          </Nav.Link>
                          <Nav.Link as={NavLink} exact to={"/about"}>
                            About
                          </Nav.Link>
                          <Nav.Link as={NavLink} exact to={"/"}>
                            Pricelist
                          </Nav.Link>
                          <Nav.Link as={NavLink} exact to={"/safetytips"}>
                            Safety Tips
                          </Nav.Link>
                          <Nav.Link as={NavLink} exact to={"/contactus"}>
                            Contact
                          </Nav.Link>
                          {/* <Nav.Link as={NavLink} exact to={"/safetytips"} activeClassName="active">Safety Tips</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/contactus"} activeClassName="active">Contact Us</Nav.Link> */}
                        </Nav>
                        {/* <Nav.Link as={NavLink} exact to={"/products"} activeClassName="active" className='text-center estimate'>Estimate Now !!!</Nav.Link> */}
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                </Col>
              </Row>
            </Container>
          </div>
        </>

        <>
          <Navbar className="nav-pad nav-bg d-lg-none d-block fixed-bottom">
            <Container className="px-lg-5">
              <div className="mx-auto">
                <Navbar.Toggle aria-controls="basic-navbar-nav mx-auto text-center py-3" />
              </div>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto text-center">
                  <Nav.Link
                    as={NavLink}
                    exact
                    to={"/home"}
                    className="margin-20"
                  >
                    <IoHome />
                    Home
                  </Nav.Link>
                  {/* <Nav.Link as={NavLink} exact to={"/about"} className='margin-20'><MdOutlineDashboard />About</Nav.Link> */}
                  <Nav.Link as={NavLink} exact to={"/"} className="margin-20">
                    <ImPriceTag />
                    Pricelist
                  </Nav.Link>
                  {/* <Nav.Link as={NavLink} exact to={"/safetytips"} className='margin-20'><MdHealthAndSafety />Safety Tips</Nav.Link> */}
                  <Nav.Link
                    as={NavLink}
                    exact
                    to={"/contactus"}
                    className="margin-20"
                  >
                    <RiContactsFill />
                    Contact
                  </Nav.Link>
                  {/* <Nav.Link as={NavLink} exact to={"/safetytips"} activeClassName="active">Safety Tips</Nav.Link>
              <Nav.Link as={NavLink} exact to={"/contactus"} activeClassName="active">Contact Us</Nav.Link> */}
                </Nav>
                {/* <Nav.Link as={NavLink} exact to={"/products"} activeClassName="active" className='text-center estimate'>Estimate Now !!!</Nav.Link> */}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      </>
    </>
  );
};
const AppBarFour = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);

  const handleShow = (app) => {
    setSelectedApp(app);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedApp(null);
  };

  const qrCodes = {
    gpay: require("../../assets/images/gpay2.jpeg"),
    phonepe: require("../../assets/images/phonepae.jpeg"),
  };
  return (
    <>
      <>
        <div className="mark-bg d-lg-block d-none">
          <div className="d-lg-block d-none">
            <Container fluid>
              <Row className="py-0">
                <Col lg="12" className="align-self-center">
                  <Marquee
                    pauseOnHover={true}
                    direction="left"
                    speed={50}
                    delay={9}
                  >
                    💥 "வெடி வெடிக்க வேண்டாமா? அப்போ நேரா வா – சிவகாசி VM
                    Crackers Shop கு வா! சலுகை கண்ணை மூட வைக்கும், விலை பைய
                    எடுத்துவைக்கும்!" 🎆 "ஒரே ஷாப்புல வாங்குறீங்க, அனைத்து வகை
                    வெடிகளும் கிடைக்குது! தீபாவளிக்கு தீபமா வெடிக்கணும்னா – VM
                    கு வா தம்பி!"(63698 09391)
                  </Marquee>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <>
          <div
            className="d-lg-none d-block py-3 align-self-center"
            style={{
              backgroundColor: "#feba17",
            }}
          >
            <Col lg="12" className="align-self-center ">
              <Marquee
                pauseOnHover={true}
                direction="left"
                speed={50}
                delay={9}
              >
                💥 "வெடி வெடிக்க வேண்டாமா? அப்போ நேரா வா – சிவகாசி VM Crackers
                Shop கு வா! சலுகை கண்ணை மூட வைக்கும், விலை பைய எடுத்துவைக்கும்!"
                🎆 "ஒரே ஷாப்புல வாங்குறீங்க, அனைத்து வகை வெடிகளும் கிடைக்குது!
                தீபாவளிக்கு தீபமா வெடிக்கணும்னா – VM கு வா தம்பி!"(63698 09391)
              </Marquee>
            </Col>
          </div>
        </>
        <>
          <div className="navv-bg ">
            <Container className="py-3 z">
              <Row>
                <Col lg="4" className="align-self-center d-lg-block d-none">
                  <div className="address-box">
                    <h5 className="bold"> Address</h5>
                    <p className="regular">
                      Kazhugumalai Main Road , Vembakottai
                    </p>
                  </div>
                </Col>

                <Col lg="4" md="12" xs="12">
                  <Navbar.Brand href="/">
                    <div className=" d-flex justify-content-center">
                      <img
                        style={{
                          width: "150px",
                        }}
                        src={require("../../assets/images/Logo_updated-01.png")}
                        alt="company-logo"
                      />
                    </div>
                  </Navbar.Brand>
                </Col>
                <Col lg="4" className="align-self-center d-lg-block d-none">
                  <div className="mobile-box">
                    <h5 className="bold">Mobile Number</h5>
                    <ul className="regular">
                      <li>+91 63698 09391</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </>

        <>
          <Navbar expand="lg" className="navlinkContainer-bg">
            <Container>
              <Navbar.Collapse className="show">
                <Nav className="me-auto text-center py-3 ">
                  <Nav.Link
                    className="text-white"
                    as={NavLink}
                    exact
                    to={"/home"}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    className="text-white navlink-about"
                    as={NavLink}
                    exact
                    to={"/about"}
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    className="text-white blink-highlight"
                    as={NavLink}
                    exact
                    to={"/"}
                  >
                    PriceList
                  </Nav.Link>
                  <Nav.Link
                    className="text-white navlink-safety"
                    as={NavLink}
                    exact
                    to={"/safetytips"}
                  >
                    Safety Tips
                  </Nav.Link>
                  <Nav.Link
                    className="text-white"
                    as={NavLink}
                    exact
                    to={"/contactus"}
                  >
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      </>
    </>
  );
};

export { AppBar, AppBarTwo, AppBarThree, AppBarFour };
