import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppBarFour } from "./components/AppBar";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { ButtonView, Buttons } from "../components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { MagicStar, HeartTick, Quant, Tag2 } from "iconsax-react";
// import Banner from './components/Banner';
import Carousal from "./components/Carousal";
import { HomeProductThree } from "./HomeProducts";
import "./home.css";
// import Countdown from './components/DayCount';
const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 500,
      duration: 3000,
      easing: "ease",
      mirror: true,
    });
  }, []);
  const navigate = useNavigate();
  const handlenavigate = () => {
    navigate("/");
  };

  return (
    <>
      <div className="over">
        <AppBarFour />
        <img
          src={require("../assets/sivasakthicrackersimage/homebanner.jpg")}
          className="img-fluid w-100"
          alt="product name"
        />
        {/* <div className="padding">
          <Container>
            <Row>
              <div class="blast-one">
                <img
                  src={require("../assets/sivasakthicrackersimage/blast_one.gif")}
                  class="img-fluid"
                  alt="Blast Crackers"
                />
              </div>
              <div class="blast-two">
                <img
                  src={require("../assets/sivasakthicrackersimage/blast_two.gif")}
                  class="img-fluid"
                  alt="Blast Crackers"
                />
              </div>
            </Row>
          </Container>
        </div> */}
        <div className="padding">
          <Container>
            <Row>
              <Col lg="12">
                <h1 class=" bold text-center pb-5 lg-font">
                  {" "}
                  Welcome to MERWIN Crackers
                </h1>
              </Col>
              <Col lg="6" xs={12} className="py-3 align-self-center">
                <div data-aos="fade-right">
                  <h2 class=" bold pt-5">Diwali Best Crackers In sivakasi</h2>

                  <p class="regular">
                    We supply quality crackers at lowest price. Crackers are
                    available in different specifications as per the
                    requirements of the clients. We provide variety of
                    firecrackers including single and multi-sound crackers,
                    sparklers, ground chakkars, flower pots, twinkling stars,
                    pencils, fancy rockets, aerial and fancy fireworks, fancy
                    whistling varieties, amorces, chorsa garlands, atom crackers
                    and electric crackers. We are specialists in fireworks gift
                    boxes and we have variety of gift boxes. Crackers are
                    procured from reliable vendors and are known for low
                    emission of noise &amp; pollution. Our Crackers are
                    available in various size packs, it is suitable for all
                    types of occasions.{" "}
                  </p>
                  <p class="regular">
                    At MERWIN Crackers, customer satisfaction is our top
                    priority. Our friendly staff is always on hand to help you
                    choose the best crackers that suit your needs. With a
                    reputation built on trust, safety, and affordability, we
                    have established strong relationships with our suppliers to
                    bring you the very best in crackers.
                  </p>
                </div>
              </Col>
              <Col lg="6" className="py-3" data-aos="fade-left">
                <img
                  src={require("../assets/images/clif.jpg")}
                  className="img-fluid"
                  alt="product name"
                />
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="py-5 padding">
          <Row>
            <Col lg="12" xs={12} className="text-center py-3">
              <h2 className="bold">Our Products</h2>
              <p className="regular">
                Our motto is to make every festival celebration bright and
                safe.This, we bring out with our wide range of firecrackers.
                With over 200 varieties of crackers developed and marketed every
                year, we are among the most sought brands in the Sivakasi region
                and around the country. Our products are known for their safety
                and we take great efforts to ensure that all our orders are
                delivered in a standard time frame with an economical pricing.
              </p>
            </Col>
            <Col lg="3" md="3" xs="12" className="py-3 text-center">
              <div class="prdct-card" data-aos="flip-left">
                <div class="product-container pb-3">
                  <img
                    src={require("../assets/images/homeproducts/homeproductsfour/chakar.webp")}
                    className="img-fluid"
                    alt="product name"
                  />
                </div>
                <div class="content text-center pb-3">
                  <p class="bold h4">Ground Chakkars</p>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" xs="12" className="py-3 text-center">
              <div class="prdct-card" data-aos="flip-right">
                <div class="product-container pb-3">
                  <img
                    src={require("../assets/images/homeproducts/homeproductsfour/gaint.webp")}
                    className="img-fluid"
                    alt="product name"
                  />
                </div>
                <div class="content text-center pb-3">
                  <p class="bold h4"> Gaints</p>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" xs="12" className="py-3 text-center">
              <div class="prdct-card" data-aos="fade-left">
                <div class="product-container pb-3">
                  <img
                    src={require("../assets/images/homeproducts/homeproductsfour/pots.webp")}
                    className="img-fluid"
                    alt="product name"
                  />
                </div>
                <div class="content text-center pb-3">
                  <p class="bold h4"> Flower Pots</p>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" xs="12" className="py-3 text-center">
              <div class="prdct-card" data-aos="fade-right">
                <div class="product-container pb-3">
                  <img
                    src={require("../assets/images/homeproducts/homeproductsfour/rocket.webp")}
                    className="img-fluid"
                    alt="product name"
                  />
                </div>
                <div class="content text-center pb-3">
                  <p class="bold h4"> Rockets</p>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" xs="12" className="py-3 text-center">
              <div class="prdct-card" data-aos="flip-up">
                <div class="product-container pb-3">
                  <img
                    src={require("../assets/images/homeproducts/homeproductsfour/singlesound.webp")}
                    className="img-fluid"
                    alt="product name"
                  />
                </div>
                <div class="content text-center pb-3">
                  <p class="bold h4"> Single Sounds</p>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" xs="12" className="py-3 text-center">
              <div class="prdct-card" data-aos="flip-up">
                <div class="product-container pb-3">
                  <img
                    src={require("../assets/images/homeproducts/homeproductsfour/sparkle.webp")}
                    className="img-fluid"
                    alt="product name"
                  />
                </div>
                <div class="content text-center pb-3">
                  <p class="bold h4"> Sparkles</p>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" xs="12" className="py-3 text-center">
              <div class="prdct-card" data-aos="flip-left">
                <div class="product-container pb-3">
                  <img
                    src={require("../assets/images/homeproducts/homeproductsfour/skyshots.webp")}
                    className="img-fluid"
                    alt="product name"
                  />
                </div>
                <div class="content text-center pb-3">
                  <p class="bold h4"> Sky Shots</p>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" xs="12" className="py-3 text-center">
              <div class="prdct-card" data-aos="fade-up">
                <div class="product-container pb-3">
                  <img
                    src={require("../assets/images/homeproducts/homeproductsfour/kids.webp")}
                    className="img-fluid"
                    alt="product name"
                  />
                </div>
                <div class="content text-center pb-3">
                  <p class="bold h4"> Kids Special</p>
                </div>
              </div>
            </Col>
            <Col lg="12">
              <div className="text-center py-3" data-aos="fade-up">
                <Buttons
                  label={<>View More Products</>}
                  onClick={handlenavigate}
                ></Buttons>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="counter padding bg-overlay z">
          <Container>
            <Row>
              <Col lg="3" xs={12} className="py-3">
                <div className="z" data-aos="fade-up">
                  <div className="counter-box text-center">
                    <CountUp end={15} delay={1.2} />
                    <span>+</span>
                  </div>
                  <div className="text-center bold text-white">
                    Years Experience
                  </div>
                </div>
              </Col>
              <Col lg="3" xs={12} className="py-3">
                <div className="z" data-aos="fade-down">
                  <div className="counter-box text-center">
                    <CountUp end={200} delay={1.2} />
                    <span>+</span>
                  </div>
                  <div className="text-center bold text-white">Products</div>
                </div>
              </Col>
              <Col lg="3" xs={12} className="py-3">
                <div className="z" data-aos="fade-right">
                  <div className="counter-box text-center">
                    <CountUp end={1000} delay={1.2} />
                    <span>+</span>
                  </div>
                  <div className="text-center bold text-white">Customers</div>
                </div>
              </Col>
              <Col lg="3" xs={12} className="py-3">
                <div className="z" data-aos="fade-left">
                  <div className="counter-box text-center">
                    <CountUp end={100} delay={1.2} />
                    <span>%</span>
                  </div>
                  <div className="text-center bold text-white">
                    Customer Satisfaction
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="whywe">
          <div className="container-fluid pad px-lg-5">
            <div className="row">
              <div className="col-lg-4 col-md-6 py-3">
                <div
                  className="quality  flipInX why ml-auto  "
                  data-wow-duration="2s"
                  data-wow-delay="0.4ms"
                >
                  <div className="icon">
                    <span>
                      <i className="fa fa-puzzle-piece "></i>
                    </span>
                  </div>
                  <div>
                    <h3 className="bold">Quality</h3>
                    <div className="regular">
                      Quality &amp; innovation are the key behind our success.
                    </div>
                  </div>
                </div>

                <div
                  className="quality marleft  flipInX why ml-auto  marright flipInX"
                  data-wow-duration="2s"
                  data-wow-delay="0.2ms"
                >
                  <div className="icon">
                    <span>
                      <i className="fa fa-magic"></i>
                    </span>
                  </div>
                  <div>
                    <h3 className="bold ">Safe to Use</h3>
                    <div className="regular">
                      Crackers we offer are safe and made from fine quality raw
                      materials.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-4 align-self-center d-md-none d-lg-block">
                <div
                  className="text-center "
                  data-wow-duration="2s"
                  data-wow-delay="0.2ms"
                >
                  <img
                    src="https://gurubhagavancrackers.com/images/centergift.png"
                    className="img-fluid"
                    alt="Gurubhagavan Crackers"
                    title="Gurubhagavan Crackers"
                  ></img>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 py-3">
                <div
                  className="why ml-auto marright  flipInX"
                  data-wow-duration="2s"
                  data-wow-delay="0.4ms"
                >
                  <div className="icon">
                    <span>
                      <i className="fa fa-heart"></i>
                    </span>
                  </div>
                  <div>
                    <h3 className="bold  ">Customer Satisfaction</h3>
                    <div className="regular">
                      Our quality and timely delivery has attracted customers
                      easily.
                    </div>
                  </div>
                </div>
                <div
                  className="why ml-auto  marright flipInX"
                  data-wow-duration="2s"
                  data-wow-delay="0.4ms"
                >
                  <div className="icon">
                    <span>
                      <i className="fa fa-tags"></i>
                    </span>
                  </div>
                  <div>
                    <h3 className="bold  ">Genuine Price</h3>
                    <div className="regular">
                      Quality products at economic price is the main motto for
                      us
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        <div className="terms-section advanced-bg position-relative">
          <Container>
            <Row>
              <Col lg="12" className="text-center py-5">
                <h2 className="terms-title">Terms & Conditions</h2>
                <p className="terms-subtitle">
                  Please review our business terms carefully before placing your
                  orders
                </p>
              </Col>
              <Col lg="8" className="mx-auto">
                <div
                  className="terms-card advanced-shadow p-5"
                  data-aos="fade-up"
                >
                  <ul className="list-unstyled">
                    <li>
                      <i className="icon-check"></i>
                      <strong>Minimum Order Value:</strong> ₹3,000
                    </li>
                    <li>
                      <i className="icon-truck"></i>
                      <strong>Transportation Charges:</strong> Extra as
                      applicable
                    </li>
                    <li>
                      <i className="icon-clock"></i>
                      <strong>Delivery Time:</strong> Tamil Nadu - 4 days, Other
                      States - 10 days
                    </li>
                    <li>
                      <i className="icon-calendar"></i>
                      <strong>Price List Validity:</strong> Valid up to October
                      1st, 2025
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* sale bg end*/}
        <Footer />
      </div>
    </>
  );
};

export default Home;
