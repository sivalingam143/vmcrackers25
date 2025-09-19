import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'

const SiteOff = () => {
  return (
    <>
        <div>
            <div className='padding site-off'>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className='site-of-text text-center text-white '>
                                <h2 className='bold'> Diwali Sale Is End <br/> Happy Diwali To All</h2>
                        
                                <div className='site-of mx-auto'>
                                    <img
                                        src={require('../assets/images/storelogo.png')}
                                        className='img-fluid'
                                        alt='product name'
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </>
  )
}

export default SiteOff