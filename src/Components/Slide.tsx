import React from 'react';

interface SlideProps {
  img: string;
  title: string;
  desc?: string;
}

const Slide: React.FC<SlideProps> = ({ img, title, desc }) => {
  return (
    <div className="slide">
      <img src={img} alt={title} className="slide-img" />
      <div className="slide-text">
        <h2>{title}</h2>
        {desc && <p>{desc}</p>}
      </div>
    </div>
  );
};

export default Slide;
