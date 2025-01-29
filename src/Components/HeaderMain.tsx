"use client"; // Asegúrate de incluir esta línea

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Importa useRouter
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

interface CartItem {
  title: string;
  price: number;
  quantity: number;
}

interface HeaderMainProps {
  cartItems: CartItem[];
}

const HeaderMain: React.FC<HeaderMainProps> = ({ cartItems = [] }) => {
  const router = useRouter(); // Hook para navegar
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>(cartItems);

  // Total de artículos en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Cargar el carrito desde localStorage cuando el componente se monta
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Guardar el carrito en localStorage cuando se actualiza
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cartItems");
    }
  }, [cart]);

  // Agregar o quitar elementos del carrito (por ejemplo, al hacer clic en el icono de carrito)
  const addItemToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((i) => i.title === item.title);
      if (itemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1; // Incrementa la cantidad del artículo
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div className="border-b border-gray-200 py-6 relative">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">LUMINA</div>

        {/* Barra de búsqueda */}
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Buscar Producto"
          />
          <BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400" size={20} />
        </div>

        {/* Iconos */}
        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <BiUser className="cursor-pointer" onClick={() => router.push("/user")} /> {/* Redirección */}
          <div className="relative">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] 
            text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <div className="relative">
            <HiOutlineShoppingBag className="cursor-pointer" onClick={() => setIsCartOpen(!isCartOpen)} />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] 
            text-white grid place-items-center translate-x-1 -translate-y-1">
              {totalItems}
            </div>
          </div>
        </div>
      </div>

      {/* Carrito de compras desplegable */}
      {isCartOpen && (
        <div className="absolute right-[100px] top-[100%] mt-2 bg-white shadow-lg p-4 w-[300px] border rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Carrito de Compras</h2>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between border-b py-2">
                  <span>
                    {item.title} (x{item.quantity})
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Tu carrito está vacío.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderMain;
