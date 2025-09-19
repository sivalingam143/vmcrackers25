import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import WhatsAppButton from "./Whatsapp";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handlenavigate = () => {
    navigate("/");
  };
  return (
    <>
      {location.pathname !== "/" && (
        <div className="fixed point2 blink" onClick={handlenavigate}>
          <img
            src={require("../../assets/images/quickpurchase.png")}
            className="img-fluid priceicn2 float-right"
            alt="special price"
          />
        </div>
      )}
      <div className="fixed point">
        <WhatsAppButton name="Hi VM CRACKERS" phoneNumber="+91 )6369809391" />
      </div>
      <a href="https://maps.app.goo.gl/AhniCPkF6Y6KTKu69">
        <div className="fixed point3" style={{ cursor: "pointer" }}>
          <img
            src={require("../../assets/images/googlelocation.png")}
            className="img-fluid priceicn float-left"
            alt="special price"
          />
        </div>
      </a>
      <a href="tel:+91 8940223892">
        <div className="fixed point4" style={{ cursor: "pointer" }}>
          <img
            src={require("../../assets/images/callicon.webp")}
            className="img-fluid priceicn float-left"
            alt="product name"
          />
        </div>
      </a>

      {/* <a href="https://www.instagram.com/amaranramesh1122000?igsh=aGE2dnJoZnU1M2g=">
        <div className="fixed point4" style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/inst.png')} className='img-fluid priceicn float-left' alt='special price' />
        </div>
      </a> 
      <a href="https://www.facebook.com/profile.php?id=61556757217479&mibextid=ZbWKwL">
        <div className="fixed point5" style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/fb.png')} className='img-fluid priceicn float-left' alt='special price' />
        </div>
      </a> 
      <a href="https://youtube.com/@rkamaran...6617?si=-oU5tWwgPmQbLxIn">
        <div className="fixed point6" style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/you.jpg')} className='img-fluid priceicn float-left' alt='special price' />
        </div>
      </a> */}
      <>
        <div className="footer-bg foot-pad ">
          <Container className="con">
            <Row className="align-items-center text-white footer-row">
              {/* Logo Section */}
              <Col
                lg={3}
                md={12}
                xs={12}
                className="text-center text-lg-start mb-3 mb-lg-0"
              >
                <img
                  src={require("../../assets/images/logosm.png")}
                  alt="com-logo"
                  className="footer-logo"
                />
                <h5 className="mt-3">
                  Best Quality Crackers <br /> @ Whole Sale Price
                </h5>
              </Col>

              {/* Contact Info */}
              <Col
                lg={3}
                md={12}
                xs={12}
                className="text-center text-lg-start mb-3 mb-lg-0"
              >
                <div className="footer-contact">
                  <p>
                    <strong>Address:</strong>
                    <br />
                    Kazhugumalai Main Road , Vembakottai
                  </p>
                  <p>
                    <strong>Phone:</strong>
                    <br />
                    89402 23892
                  </p>
                  <p>
                    <strong>Whatsapp:</strong>
                    <br />
                    63698 09391
                  </p>
                  {/* <p>
                    <strong>Email:</strong>
                    <br />
                    vmcrackers@gmail.com
                  </p> */}
                </div>
              </Col>

              {/* QR Code */}
              <Col lg={6} md={12} xs={12} className="text-center">
                <h5>Scan to Pay</h5>
                <img
                  src={require("../../assets/images/gpay2.jpeg")}
                  alt="gpay-scanner"
                  className="footer-qr"
                />
              </Col>
            </Row>
          </Container>
        </div>

        <>
          <div className="mark-bg-ft">
            <Container>
              <Row>
                <Col lg="12" className="py-3">
                  <div className="text-center regular">
                    {" "}
                    Copyright © 2024,VM Crackers. All rights reserved{" "}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      </>
    </>
  );
};

export default Footer;
