import React from 'react';
import ProductsCard from './ProductsCard'; 

interface Product {
  id: number;
  title: string;
  price: number;
  image: any;
  category: string;
  cantidad: number;
  desc: string; 
}

const data: { status: string; items: Product[] } = {
  status: "success",
  items: [
    {
      id: 1,
      title: "Jogger Cargo Celeste",
      price: 401,
      image: require('./Assets/Pantalones10.jpg'),
      category: "nike",
      cantidad: 1,
      desc: "Pantalón jogger cargo de color celeste con ajuste elástico en los tobillos.",
    },
    {
      id: 2,
      title: "Jogger Cargo Verde Militar",
      price: 304,
      image: require('./Assets/Pantalones11.jpg'),
      category: "nike",
      cantidad: 1,
      desc: "Diseño versátil en color verde militar, ideal para un look urbano y cómodo.",
    },
    // Aquí siguen los demás productos...
  ],
};

// Componente de productos
const Products = () => {
  return (
    <div className="container pt-16">
      <h2 className="font-medium text-2xl pb-4">Más Destacado</h2>
      <div
        className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10"
      >
        {data.items.map((item, index) => (
          <ProductsCard
            key={item.id} // Usar id como key en vez de index
            img={item.image}
            title={item.title}
            category={item.category}
            price={item.price}
            desc={item.desc}  // Pasar el desc correctamente
            onAddToCart={() => {}} // Lógica para añadir al carrito
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
