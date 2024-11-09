import React from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';

export default function Orders() {
  const orders = [
    {
      id: '#ORD-2024-001',
      date: 'March 15, 2024',
      total: 299.99,
      status: 'Delivered',
      items: [
        {
          name: 'Premium Wireless Headphones',
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=100&q=80',
          price: 299.99
        }
      ]
    },
    {
      id: '#ORD-2024-002',
      date: 'March 10, 2024',
      total: 399.99,
      status: 'In Transit',
      items: [
        {
          name: 'Smart Watch Series X',
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=100&q=80',
          price: 399.99
        }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'In Transit':
        return <Truck className="w-5 h-5 text-blue-500" />;
      default:
        return <Package className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#227337] mb-8">My Orders</h1>
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <p className="font-semibold text-lg">{order.id}</p>
                  <p className="text-gray-500">{order.date}</p>
                </div>
                <div className="flex items-center space-x-2 mt-2 md:mt-0">
                  {getStatusIcon(order.status)}
                  <span className="font-medium">{order.status}</span>
                </div>
              </div>
              
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-t">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-[#227337] font-bold">${item.price}</p>
                    </div>
                  </div>
                  <button className="text-[#227337] hover:text-[#1b5a2b]">
                    View Details
                  </button>
                </div>
              ))}
              
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-lg">${order.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}