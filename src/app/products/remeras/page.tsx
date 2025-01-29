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

const remerasData: Product[] = [
  {
    id: 1,
    title: "Camiseta Nike",
    price: 30,
    img: "/assets/remeras/remera1.jpg",
    category: "Nike",
    desc: "Camiseta de algodón con logo de Nike.",
  },
  {
    id: 2,
    title: "Camiseta Adidas",
    price: 35,
    img: "/assets/remeras/remera2.jpg",
    category: "Adidas",
    desc: "Camiseta de corte moderno con el logo de Adidas.",
  },
];

export default function RemerasPage() {
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
      <h2 className="font-medium text-2xl pb-4">REMERAS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {remerasData.map((item) => (
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
