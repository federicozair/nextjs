import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";

interface CartItem {
  title: string;
  price: number;
  quantity: number;
}

interface CartProps {
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ onCheckout }) => {
  // Cargar el carrito desde localStorage al iniciar
  const getCartFromStorage = () => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  };

  const [items, setItems] = useState<CartItem[]>(getCartFromStorage);

  // Limpiar el carrito si está vacío al cargar
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (!savedCart || JSON.parse(savedCart).length === 0) {
      localStorage.removeItem("cartItems");  // Limpiar localStorage si no hay items
    } else {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  // Guardar el carrito en localStorage cuando se actualiza
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(items));
    }
  }, [items]);

  const incrementQuantity = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].quantity += 1;
    setItems(updatedItems);
  };

  const decrementQuantity = (index: number) => {
    const updatedItems = [...items];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      setItems(updatedItems);
    }
  };

  const removeItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      {items.length > 0 ? (
        <div>
          <ul>
            {items.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 bg-gray-300 rounded"
                    onClick={() => decrementQuantity(index)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.title} (x{item.quantity})</span>
                  <button
                    className="px-2 py-1 bg-gray-300 rounded"
                    onClick={() => incrementQuantity(index)}
                  >
                    +
                  </button>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <FaTrash
                  onClick={() => removeItem(index)}
                  style={{ cursor: "pointer", color: "red" }}
                />
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2 className="font-semibold">Total: ${total.toFixed(2)}</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
              onClick={onCheckout}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      ) : (
        <p>Tu carrito está vacío.</p>
      )}
    </div>
  );
};

export default Cart;
