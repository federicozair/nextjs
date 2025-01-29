// BannerCarousel.tsx
import React from 'react';
import Slide from './Slide';

interface BannerProps {
  banners: {
    img: string;
    title: string;
    desc?: string;
  }[];
}

const BannerCarousel: React.FC<BannerProps> = ({ banners }) => {
  if (!Array.isArray(banners) || banners.length === 0) {
    return <p>No banners available</p>;
  }

  return (
    <div className="banner-carousel">
      <div className="carousel-container">
        {banners.map((banner, index) => (
          <Slide
            key={index}
            img={banner.img}
            title={banner.title}
            desc={banner.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
