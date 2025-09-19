import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeProduct.css'
import { ButtonView } from '../components/Buttons/Buttons'
import { Link } from 'react-router-dom';
const HomeProductsOne= () => {
    const navigate = useNavigate();
    const handlenavigate = () => {
        navigate('/products');
    }
  return (
    <>
    <div className='product_background bg-overlay padding z'>
        <Container>
            <Row>
                <Col lg="12" xs="12" md="12">
                    <div className='text-center z text-white'>
                        <h2 className='bold'> Our Products</h2>
                        <p className='regular'>With over 200 varieties of crackers developed and marketed every year, we are among the most sought brands in the Sivakasi region and around the country. Our products are known for their safety and we take great efforts to ensure that all our orders are delivered in a standard time frame with an economical pricing.
                        </p>
                    </div>
                </Col>
                <Col lg='3' md="4" xs='12' className='my-3'>
                    <div className='home-product-box'>
                        <div className='p-4'>
                            <div className='hm-product text-center'>
                                <img src={require('../assets/images/homeproducts/homeproductsone/singlesound.webp')} className='img-fluid w-75' alt='single sound'/>
                            </div>
                        </div>
                        <div class="text-center pb-3">
                             <p class="regular h4">SingleSound</p>
                        </div>
                    </div>
                </Col>
                <Col lg='3' md="4" xs='12' className='my-3'>
                    <div className='home-product-box'>
                        <div className='p-4'>
                            <div className='hm-product text-center'>
                                <img src={require('../assets/images/homeproducts/homeproductsone/garland.webp')} className='img-fluid w-75' alt='single sound'/>
                            </div>
                        </div>
                        <div class="text-center pb-3">
                             <p class="regular h4">Garland</p>
                        </div>
                    </div>
                </Col>
                <Col lg='3' md="4" xs='12' className='my-3'>
                    <div className='home-product-box'>
                        <div className='p-4'>
                            <div className='hm-product text-center'>
                                <img src={require('../assets/images/homeproducts/homeproductsone/sparklers.webp')} className='img-fluid w-75' alt='single sound'/>
                            </div>
                        </div>
                        <div class="text-center pb-3">
                             <p class="regular h4">Sparklers</p>
                        </div>
                    </div>
                </Col>
                <Col lg='3' md="4" xs='12' className='my-3'>
                    <div className='home-product-box'>
                        <div className='p-4'>
                            <div className='hm-product text-center'>
                                <img src={require('../assets/images/homeproducts/homeproductsone/rockets.webp')} className='img-fluid w-75' alt='single sound'/>
                            </div>
                        </div>
                        <div class="text-center pb-3">
                             <p class="regular h4">Rockets</p>
                        </div>
                    </div>
                </Col>
                <Col lg='3' md="4" xs='12' className='my-3'>
                    <div className='home-product-box'>
                        <div className='p-4'>
                            <div className='hm-product text-center'>
                                <img src={require('../assets/images/homeproducts/homeproductsone/flowerpots.webp')} className='img-fluid w-75' alt='flower pots'/>
                            </div>
                        </div>
                        <div class="text-center pb-3">
                             <p class="regular h4">Flower Pots</p>
                        </div>
                    </div>
                </Col>
                <Col lg='3' md="4" xs='12' className='my-3'>
                    <div className='home-product-box'>
                        <div className='p-4'>
                            <div className='hm-product text-center'>
                                <img src={require('../assets/images/homeproducts/homeproductsone/chakkar.webp')} className='img-fluid w-75' alt='chakkar'/>
                            </div>
                        </div>
                        <div class="text-center pb-3">
                             <p class="regular h4">
                             Chakkars</p>
                        </div>
                    </div>
                </Col>
                <Col lg='3' md="4" xs='12' className='my-3'>
                    <div className='home-product-box'>
                        <div className='p-4'>
                            <div className='hm-product text-center'>
                                <img src={require('../assets/images/homeproducts/homeproductsone/fancyfountain.webp')} className='img-fluid w-75' alt='fancy fountain'/>
                            </div>
                        </div>
                        <div class="text-center pb-3">
                             <p class="regular h4">Fancy Fountains</p>
                        </div>
                    </div>
                </Col>
                <Col lg='3' md="4" xs='12' className='my-3'>
                    <div className='home-product-box'>
                        <div className='p-4'>
                            <div className='hm-product text-center'>
                                <img src={require('../assets/images/homeproducts/homeproductsone/skyshots.png')} className='img-fluid w-75' alt='Sky shots'/>
                            </div>
                        </div>
                        <div class="text-center pb-3">
                             <p class="regular h4">Sky Shots</p>
                        </div>
                    </div>
                </Col>
                <Col xs="12">
                    <div className='z text-center py-3'>
                        <ButtonView label={<>Shop Now</>} className="shop-now" onClick={handlenavigate}/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
       
    </>
  )
}

const HomeProductsTwo = () => {
    const navigate = useNavigate();
    const handlenavigate = () => {
        navigate('/products');
    }
  return (
    <>
    <div className='product_background bg-overlay padding'>
        <Container className='z'>
            <Row>
            <Col xs='12' className='py-3'>
            <h2 className='text-white text-center bold py-2'> Our Products</h2>
                <div className='text-center text-white regular'>With over 200 varieties of crackers developed and marketed every year, we are among the most sought brands in the Sivakasi region and around the country. Our products are known for their safety and we take great efforts to ensure that all our orders are delivered in a standard time frame with an economical pricing.</div>
            </Col>
                <Col lg='2' md="3" xs='6' className='my-3'>
                    <div className='home-product-box-two'>
                        <img src={require('../assets/images/homeproducts/homeproductstwo/bombs.jpg')} className='img-fluid brd' alt='single sound'/>
                    </div>
                    <div className='py-2 text-center'>
                        <h5 className='bold text-white'> Ground Chakkars</h5>
                    </div>
                </Col>
                <Col lg='2' md="3" xs='6' className='my-3'>
                    <div className='home-product-box-two'>
                        <img src={require('../assets/images/homeproducts/homeproductstwo/sparklers.jpg')} className='img-fluid brd' alt='single sound'/>
                    </div>
                    <div className='py-2 text-center'>
                        <h5 className='bold text-white'> Sparklers</h5>
                    </div>
                </Col>
                <Col lg='2' md="3" xs='6' className='my-3'>
                    <div className='home-product-box-two'>
                        <img src={require('../assets/images/homeproducts/homeproductstwo/colourmatches.jpg')} className='img-fluid brd' alt='single sound'/>
                    </div>
                    <div className='py-2 text-center'>
                        <h5 className='bold text-white'> Garlands</h5>
                    </div>
                </Col>
                <Col lg='2' md="3" xs='6' className='my-3'>
                    <div className='home-product-box-two'>
                        <img src={require('../assets/images/homeproducts/homeproductstwo/flowerpots.jpg')} className='img-fluid brd' alt='single sound'/>
                    </div>
                    <div className='py-2 text-center'>
                        <h5 className='bold text-white'> Sound Crackers</h5>
                    </div>
                </Col>
                <Col lg='2' md="3" xs='6' className='my-3'>
                    <div className='home-product-box-two'>
                        <img src={require('../assets/images/homeproducts/homeproductstwo/fountain.jpg')} className='img-fluid brd' alt='single sound'/>
                    </div>
                    <div className='py-2 text-center'>
                        <h5 className='bold text-white'> Rockets</h5>
                    </div>
                </Col>
                <Col lg='2' md="3" xs='6' className='my-3'>
                    <div className='home-product-box-two'>
                        <img src={require('../assets/images/homeproducts/homeproductstwo/giftbox.jpg')} className='img-fluid brd' alt='single sound'/>
                    </div>
                    <div className='py-2 text-center'>
                        <h5 className='bold text-white'> Flower Pots</h5>
                    </div>
                </Col>
                <Col lg='12'>
                    <div className='text-center'>
                        <ButtonView label={<>Shop Now</>} className="shop-now" onClick={handlenavigate}/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
      
    </>
  )
}
/* eslint-disable no-dupe-keys */

const HomeProductThree = () => {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      speed: 1700,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 4
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        }
      ]
    };
  
    return (
      <>
        <div>
          <Container>
            <Row>
              <Col xs={12}>
                <div className="text-center my-5">
                  <h3>OUR PRODUCTS</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Slider {...settings} className='padding'>
          <div className="slider-image">
            <Link to="/products">  {/* Add Link to wrap the image */}
              <img src={require('../assets/images/homeproducts/homeproducts_three/Chakkar.webp')} className='img-fluid brd' alt='Chakkar' />
            </Link>
          </div>
          <div className="slider-image">
            <Link to="/products">
              <img src={require('../assets/images/homeproducts/homeproducts_three/Flower-pots.webp')} className='img-fluid brd' alt='Flower Pots' />
            </Link>
          </div>
          <div className="slider-image">
            <Link to="/products">
              <img src={require('../assets/images/homeproducts/homeproducts_three/Rocket.webp')} className='img-fluid brd' alt='Rocket' />
            </Link>
          </div>
          <div className="slider-image">
            <Link to="/products">
              <img src={require('../assets/images/homeproducts/homeproducts_three/Sound-crackers.webp')} className='img-fluid brd' alt='Sound Crackers' />
            </Link>
          </div>
          <div className="slider-image">
            <Link to="/products">
              <img src={require('../assets/images/homeproducts/homeproducts_three/garland.webp')} className='img-fluid brd' alt='Garland' />
            </Link>
          </div>
          <div className="slider-image">
            <Link to="/products">
              <img src={require('../assets/images/homeproducts/homeproducts_three/sparkler.webp')} className='img-fluid brd' alt='Sparkler' />
            </Link>
          </div>
        </Slider>
      </>
    );
  }

export {HomeProductsOne,HomeProductsTwo,HomeProductThree}