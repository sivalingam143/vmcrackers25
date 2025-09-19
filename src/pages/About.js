import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppBarFour } from "./components/AppBar";
import Footer from "./components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { Buttons } from "../components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
// import { MagicStar,HeartTick,Quant,Tag2} from 'iconsax-react';
import Carousal from "./components/Carousal";
const About = () => {
  const navigate = useNavigate();
  const handlenavigate = () => {
    navigate("/");
  };
  useEffect(() => {
    AOS.init({
      offset: 200, // Offset (in px) from the original trigger point
      delay: 0, // Values from 0 to 3000, with step 50ms
      duration: 4000, // Values from 0 to 3000, with step 50ms
      easing: "ease", // Default easing for AOS animations
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <>
      <AppBarFour />
      <img
        src={require("../assets/images/aboutbanner.webp")}
        className="img-fluid w-100"
        alt="product name"
      />
      <>
        <div className="padding">
          <Container>
            <Row>
              <Col lg="6" className="py-3 align-self-center">
                <h3 className="bold">About Us</h3>
                <h4 className="bold">VM CRACKERS</h4>
                <div className="regular">
                  <p>
                    Welcome to VM CRACKERS , your one-stop destination for
                    high-quality crackers available both in retail and
                    wholesale! As one of the leading cracker stores in the
                    region, we offer an extensive variety of fireworks ranging
                    from sparklers, rockets, flowerpots, and more, ensuring
                    celebrations filled with joy, color, and excitement.
                  </p>

                  <p>
                    Our shop crackers to all types of events, from festivals
                    like Diwali and New Year to weddings, birthdays, and special
                    occasions. We proudly maintain the highest safety standards,
                    ensuring that our products are not only vibrant but also
                    reliable and safe for use.
                  </p>

                  <p>
                    Whether you're looking for a small pack to light up a cozy
                    family gathering or bulk orders for large events or
                    businesses, we provide competitive pricing and premium
                    quality products that never fail to impress.
                  </p>
                </div>
              </Col>
              <Col lg="6" className="py-3 text-center">
                <img
                  src={require("../assets/images/about.png")}
                  className="img-fluid"
                  alt="product"
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="counter padding bg-overlay z">
          <Container>
            <Row>
              <Col lg="12" className="py-3 text-center z">
                <h4 className="bold text-white">
                  We have handpicked your favorite crackers in our
                  pricelist..Please check it . . !!!
                </h4>

                <Buttons
                  label={<>View More ... !</>}
                  onClick={handlenavigate}
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="padding">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <div className="text-center" data-aos="fade-right">
                  <h1 className="bold h1color"> Brands We Handle</h1>
                </div>
                <div class="smallborder1"></div>
                <div>
                  <Carousal />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
      <>
        {/* <img
          src={require("../assets/images/banner/banner_onefour.jpg")}
          className="img-fluid w-100"
          alt="product"
        /> */}
        <div className="padding">
          <Container>
            <Row>
              <Col lg="12" xs="12">
                <h2 className="bold h1color"> Vision & Mission</h2>
                <p className=" regular">
                  To be the best wholesale & retail dealer for all kind of fancy
                  crackers & giftboxes to our beloved customers.
                </p>
                <p className=" regular">
                  Our Mission is to provide Quality & Innovative Fireworks
                  products to our valuable customers at reasonable price and
                  light up all their celebrations.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </>
      <Footer />
    </>
  );
};

export default About;
