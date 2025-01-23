import React from 'react';

const Admin = ({ orders }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      {orders.length > 0 ? (
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
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{order.name}</td>
                <td className="border border-gray-300 p-2">{order.dni}</td>
                <td className="border border-gray-300 p-2">{order.email}</td>
                <td className="border border-gray-300 p-2">{order.address}</td>
                <td className="border border-gray-300 p-2">
                  {order.products.map((p) => (
                    <div key={p.title}>{p.title} (x{p.quantity})</div>
                  ))}
                </td>
                <td className="border border-gray-300 p-2">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Admin;