"use client";

import React, { createContext, useState, useContext } from "react";

interface CartItem {
  title: string;
  price: number;
  quantity: number;
}

interface User {
  name: string;
  dni: string;
  address: string;
  email: string;
}

interface Order extends User {
  products: CartItem[];
  date: string;
}

interface ShopContextType {
  cart: CartItem[];
  user: User | null;
  orders: Order[];
  addToCart: (item: CartItem) => void;
  setUser: (user: User) => void;
  completePurchase: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.title === item.title);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.title === item.title ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const completePurchase = () => {
    if (user && cart.length > 0) {
      const newOrder: Order = {
        ...user,
        products: cart,
        date: new Date().toISOString().split("T")[0],
      };

      setOrders((prevOrders) => [...prevOrders, newOrder]);
      setCart([]); // Vaciar carrito después de la compra
    }
  };

  return (
    <ShopContext.Provider value={{ cart, user, orders, addToCart, setUser, completePurchase }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop debe usarse dentro de un ShopProvider");
  }
  return context;
};
