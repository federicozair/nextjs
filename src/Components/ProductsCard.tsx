"use client";
import React from "react";

interface ProductCardProps {
  img: string;
  title: string;
  price: number;
  category: string;
  desc: string; // Agregar la propiedad desc
  onAddToCart: () => void;
}

const ProductsCard: React.FC<ProductCardProps> = ({
  img,
  title,
  price,
  category,
  desc,
  onAddToCart,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img src={img} alt={title} className="w-full h-60 object-cover rounded-md mb-4" />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500">{category}</p>
      <p className="text-xl font-bold mt-2">${price}</p>
      <p className="text-sm text-gray-600 mt-2">{desc}</p> {/* Aquí mostramos el desc */}
      <button
        onClick={onAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductsCard;
