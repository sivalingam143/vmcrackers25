import React from "react";
import MetaTags from "./components/MetaTags";
import { AppBarFour } from "./components/AppBar";
import { Container, Row, Col } from "react-bootstrap";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Mark from "./components/Mark";
const ContactUs = () => {
  return (
    <div className="overflow-hidden">
      <MetaTags
        title="Contact Us - VM crackers - Whole sale Crackers"
        type="website"
        siteName="vmcrackers.zentexus.in"
        url="https://vmcrackers.zentexus.in/contactus"
        keywords="Contact Us | VM Crackers  "
        description="Contact for wholesale Crackers and Retail Crackers"
        revisitAfter="10 Days"
      />
      <AppBarFour />
      <img
        src={require("../assets/images/banner/banner_onefour.jpg")}
        className="img-fluid w-100"
        alt="product name"
      />
      <Container className="padding">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="py-3">
            <h1 className="bold black text-center"> Contact Us</h1>
          </Col>
          <Col lg="6" md="12" className="py-3">
            <div className="box">
              <div className="box-icon">
                <PiMapPinSimpleAreaBold size={40} color={"#000"} />
              </div>
              <div className="bold"> Kazhugumalai Main Road , Vembakottai</div>
            </div>
          </Col>
          <Col lg="6" className="py-3">
            <div className="box">
              <div className="box-icon">
                <BiPhoneCall size={40} color={"#000"} />
              </div>
              <div>
                <li className="bold">+91 63698 09391</li>
                <li className="bold">+91 89402 23892</li>
              </div>
            </div>
          </Col>
          {/* <Col lg="4" className="py-3">
            <div className="box">
              <div className="box-icon">
                <MdOutlineAlternateEmail size={40} color={"#000"} />
              </div>
              <div className="pb-4">
                <div className="bold"> vmcrackers@gmail.com</div>
              </div>
            </div>
          </Col> */}

          <Col lg="12" md="12" xs="12" className="py-5">
            <>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d478969.35900381405!2d77.779692!3d9.35675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06c90047862b7b%3A0x5f09cace9a24852b!2sVM%20Crackers!5e1!3m2!1sen!2sin!4v1758265730162!5m2!1sen!2sin"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                title="Google Maps Embed of VM Crackers, Tamil Nadu"
              ></iframe>
            </>
          </Col>
        </Row>
      </Container>

      <>
        <Mark />
      </>
    </div>
  );
};

export default ContactUs;
