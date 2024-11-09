import React from 'react';
import { CreditCard, Truck } from 'lucide-react';

export default function Checkout() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#227337] mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#227337] focus:ring focus:ring-[#227337] focus:ring-opacity-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#227337] focus:ring focus:ring-[#227337] focus:ring-opacity-50" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#227337] focus:ring focus:ring-[#227337] focus:ring-opacity-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#227337] focus:ring focus:ring-[#227337] focus:ring-opacity-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#227337] focus:ring focus:ring-[#227337] focus:ring-opacity-50" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 border rounded-md">
                  <CreditCard className="w-6 h-6 text-[#227337]" />
                  <div>
                    <p className="font-medium">Credit Card</p>
                    <p className="text-sm text-gray-500">Pay with your credit card</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Card Number</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#227337] focus:ring focus:ring-[#227337] focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#227337] focus:ring focus:ring-[#227337] focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">CVC</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#227337] focus:ring focus:ring-[#227337] focus:ring-opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b">
                <div className="flex items-center space-x-3">
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=100&q=80" alt="Product" className="w-16 h-16 object-cover rounded" />
                  <div>
                    <p className="font-medium">Premium Wireless Headphones</p>
                    <p className="text-sm text-gray-500">Quantity: 1</p>
                  </div>
                </div>
                <p className="font-medium">$299.99</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$299.99</span>
                 </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$9.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$30.00</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>$339.98</span>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="w-full bg-[#227337] text-white py-3 rounded-md hover:bg-[#1b5a2b] transition-colors flex items-center justify-center space-x-2">
                  <Truck className="w-5 h-5" />
                  <span>Place Order</span>
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  By placing your order, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}