"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div className="container pt-6 lg:pt-0">
      <Slider {...settings}>
        <div>
          <img src="/assets/banner/banner1.png" alt="Banner 1" />
        </div>
        <div>
          <img src="/assets/banner/banner2.jpg" alt="Banner 2" />
        </div>
        <div>
          <img src="/assets/banner/banner3.jpg" alt="Banner 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
