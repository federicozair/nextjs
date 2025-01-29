import React from "react";
import { useShop } from "@/Context/ShopContext"; // Corregida la importación

interface Product {
  title: string;
  quantity: number;
}

interface Order {
  name: string;
  dni: string;
  email: string;
  address: string;
  products: Product[];
  date: string;
}

// Simulación de datos
const fetchOrders = async (): Promise<Order[]> => {
  return [
    {
      name: "Juan Pérez",
      dni: "12345678",
      email: "juan@example.com",
      address: "Calle Falsa 123",
      products: [
        { title: "Pantalón", quantity: 2 },
        { title: "Remera", quantity: 1 },
      ],
      date: "2024-01-28",
    },
  ];
};

const AdminPage = async () => {
  const orders: Order[] = await fetchOrders(); // Definir tipo explícitamente

  if (!orders || orders.length === 0) {
    return <p>No orders found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">DNI</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Address</th>
            <th className="border border-gray-300 p-2">Products</th>
            <th className="border border-gray-300 p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: Order, index: number) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{order.name}</td>
              <td className="border border-gray-300 p-2">{order.dni}</td>
              <td className="border border-gray-300 p-2">{order.email}</td>
              <td className="border border-gray-300 p-2">{order.address}</td>
              <td className="border border-gray-300 p-2">
                {order.products.map((p: Product, i: number) => (
                  <div key={i}>{p.title} (x{p.quantity})</div>
                ))}
              </td>
              <td className="border border-gray-300 p-2">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
