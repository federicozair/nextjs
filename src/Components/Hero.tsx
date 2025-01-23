"use client";

import React from 'react';
import Slider from "react-slick";
import Slide from  "./Slide";


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

  const SlideData = [
    {
      id: 1,
      img: "./Assets/banner1.png", 
    },
    {
      id: 2,
      img: "./Assets/banner2.jpg", 
    },
    {
      id: 3,
      img: "./Assets/banner3.jpg", 
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {SlideData.map((item) => (
            <Slide
              key={item.id}
              img= {item.img}
                />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
