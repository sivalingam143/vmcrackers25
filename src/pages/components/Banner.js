import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Banner = ({banner}) => {
  console.log('log',banner.length)
  return (
    <div>
        <Carousel>
        {banner.length > 0 ? (
          banner.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                src={item.img}
                className='img-fluid w-100'
                alt={`Banner ${item.id}`}
                style={{ width: '1500px', height: '500px', objectFit: 'contain' }}
              />
            </Carousel.Item>
          ))
        ) : (
          <>
            <Carousel.Item>
              <img
                src={require('../../assets/images/banner_two.jpg')}
                className='img-fluid w-100'
                alt='product name'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require('../../assets/images/banner_four.jpg')}
                className='img-fluid w-100'
                alt='product name'
              />
            </Carousel.Item>
          </>
        )}
      </Carousel>
    </div>
  )
}

export default Banner