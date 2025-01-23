import React from 'react';
import Image from 'next/image'; 

interface PropsType {
  img: string;
  title: string;
  desc: string; 
  price: string;
  category: string; 
}

const ProductsCard: React.FC<PropsType> = ({ 
  img,
  title,
  desc,
  price,
  category, // Ahora disponible si quieres usarla
}) => {
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="w-full h-auto"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-lg font-bold">{title}</h2>
        {desc && <p className="text-sm text-gray-500">{desc}</p>} {/* Si desc es opcional */}
        <p className="text-lg font-semibold text-gray-800">{price}</p>
        {category && <p className="text-xs text-gray-400">{category}</p>} {/* Si category es opcional */}
      </div>
    </div>
  );
};

export default ProductsCard;
