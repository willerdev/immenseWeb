import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#227337] mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
              <div className="flex items-center justify-between pb-6 border-b">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=200&q=80"
                    alt="Product"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Premium Wireless Headphones</h3>
                    <p className="text-[#227337] font-bold">$299.99</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">1</span>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$299.99</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-3 border-t">
                <span>Total</span>
                <span>$309.98</span>
              </div>
            </div>
            <Link to="/checkout" className="block w-full bg-[#227337] text-white text-center py-3 rounded-md mt-6 hover:bg-[#1b5a2b] transition-colors">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}