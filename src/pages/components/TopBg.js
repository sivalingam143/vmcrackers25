import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { TfiArrowCircleDown } from "react-icons/tfi";
const TopBg = () => {
  return (
    <>
      <div className='top-bg'>
        <Container>
          <Row>
            <Col lg='12' id='home' className='text-center'>
              <div className='home-center'>
                <div className='move'>
                  <img
                    src={require('../assets/images/storelogo.png')}
                    className='img-fluid'
                    alt='product name'
                  />
                </div>
                <div className='quote'>
                  <div> Diwali filled with </div>
                  <div>love, laughter, and endless joy</div>
                </div>
                <div className='bold mt-5 down'>
                  <Link to="app-bar" smooth={true} duration={500}>
                      <TfiArrowCircleDown />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TopBg;
