import React, { useState } from 'react';

const Cart = ({ cartItems, onCheckout }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-2">
                <span>{item.title} (x{item.quantity})</span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2 className="font-semibold">Total: ${total}</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
              onClick={onCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};
