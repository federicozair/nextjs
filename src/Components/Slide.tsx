import React from 'react';

interface PropsType {
  img: string;
  title: string;
  maintitle: string;
  price: string;
}

const Slide: React.FC<PropsType> = ({ img, title, maintitle, price }) => {
  return (
    <div className="outline-none border-none relative">
      <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] 
      top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa7] sm:bg-transparent p-4 
      sm:p-0 rounded-lg sm:rounded-none">
      </div>

      <img className="w-[100%] h-[300px] md:h-auto rounded-x1 object-cover object-right 
      md:object-left-bottom"
        src={img}
        alt={"banner"}
        width={2000}
        height={2000}
      />
    </div>
  );
};

export default Slide;
