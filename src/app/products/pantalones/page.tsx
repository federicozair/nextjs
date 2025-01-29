"use client";

import React, { useState } from "react";
import ProductsCard from "@/Components/ProductsCard";

interface Product {
  id: number;
  title: string;
  price: number;
  img: string;
  category: string;
  desc: string;  // Asegúrate de que 'desc' está definido
  quantity?: number;
}

const pantalonesData: Product[] = [
  {
    id: 1,
    title: "Jogger Cargo Celeste",
    price: 60,
    img: "/assets/pantalones/pantalones7.jpg",
    category: "Nike",
    desc: "Jogger cargo ideal para el día a día.",
  },
  {
    id: 2,
    title: "Pantalón Levi’s Slim Fit",
    price: 75,
    img: "/assets/pantalones/pantalones8.jpg",
    category: "Levi's",
    desc: "Pantalón de corte slim fit para cualquier ocasión.",
  },
];

export default function PantalonesPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity! + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="font-medium text-2xl pb-4">PANTALONES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {pantalonesData.map((item) => (
          <ProductsCard
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            category={item.category}
            desc={item.desc}  // Asegúrate de pasar 'desc'
            onAddToCart={() => addToCart(item)} // Pasa la función de agregar al carrito
          />
        ))}
      </div>
    </div>
  );
}
