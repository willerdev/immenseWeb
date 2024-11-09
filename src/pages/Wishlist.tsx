import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

export default function Wishlist() {
  const wishlistItems = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Smart Watch Series X',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#227337] mb-8">My Wishlist</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-[#227337] font-bold mt-2">${item.price}</p>
                <button className="mt-4 w-full bg-[#227337] text-white py-2 rounded-md hover:bg-[#1b5a2b] transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}