import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
                alt="Product"
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-800">Premium Wireless Headphones</h1>
              <p className="text-2xl font-bold text-[#227337] mt-4">$299.99</p>
              <div className="mt-6 space-y-4">
                <p className="text-gray-600">
                  Experience premium sound quality with our wireless headphones. 
                  Featuring active noise cancellation and 30-hour battery life.
                </p>
                <div className="flex items-center space-x-4">
                  <button className="flex-1 bg-[#227337] text-white py-3 px-6 rounded-md hover:bg-[#1b5a2b] transition-colors flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                  <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}