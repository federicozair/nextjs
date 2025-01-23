import React from 'react';
import ProductsCard from './ProductsCard'; // Asegúrate de importar el componente correctamente.

const data = {
  status: "success",
  items: [
    {
      id: 1,
      title: "Jogger Cargo Celeste",
      price: 401,
      img: require('./Assets/Pantalones (10).jpg'),
      category: "nike",
      cantidad: 1,
    },
    {
      id: 2,
      title: "Jogger Cargo Verde Militar",
      price: 304,
      img: require('./Assets/Pantalones (11).jpg'),
      category: "nike",
      cantidad: 1,
    },
    {
      id: 3,
      title: "Jogger Cargo Celeste Pastel liso",
      price: 475,
      img: require('./Assets/Pantalones (9).jpg'), // Cambié `image` a `img` para consistencia.
      category: "nike",
      cantidad: 1,
    },
    // ...resto de los productos
  ],
};

const Products = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">Más Destacado</h2>
        <div
          className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
          lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10"
        >
          {data.items.map((item: any, index: number) => (
            <ProductsCard
              key={index}
              img={item.img}
              title={item.title}
              category={item.category}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
