/* eslint-disable no-dupe-keys */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1700,
    autoplaySpeed: 1700,

    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="slider-image">
        <img
          src={require("../../assets/sivasakthicrackersimage/brand1.webp")}
          className="img-fluid"
          alt="website developer"
        />
      </div>
      <div className="slider-image">
        <img
          src={require("../../assets/sivasakthicrackersimage/brand2.webp")}
          className="img-fluid"
          alt="website developer"
        />
      </div>
      <div className="slider-image">
        <img
          src={require("../../assets/sivasakthicrackersimage/brand3.webp")}
          className="img-fluid"
          alt="website developer"
        />
      </div>
      <div className="slider-image">
        <img
          src={require("../../assets/sivasakthicrackersimage/brand4.webp")}
          className="img-fluid "
          alt="website developer"
        />
      </div>
      <div className="slider-image">
        <img
          src={require("../../assets/sivasakthicrackersimage/brand5.webp")}
          className="img-fluid "
          alt="website developer"
        />
      </div>
      <div className="slider-image">
        <img
          src={require("../../assets/sivasakthicrackersimage/brand6.webp")}
          className="img-fluid "
          alt="website developer"
        />
      </div>
    </Slider>
  );
}
