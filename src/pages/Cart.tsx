import React from 'react';
import { Trash2, Plus, Minus, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../hooks/useCart';

export default function Cart() {
  const { user } = useAuth();
  const { cartItems, loading, error, updateQuantity, removeFromCart } = useCart(user?.id);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <Loader className="w-8 h-8 text-[#227337] animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.products?.price || 0) * item.quantity, 0);
  const shipping = subtotal > 0 ? 9.99 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold text-[#227337] mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Start shopping to add items to your cart!</p>
          <Link to="/" className="inline-block bg-[#227337] text-white px-6 py-3 rounded-md hover:bg-[#1b5a2b]">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#227337] mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between pb-6 border-b">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.products?.image_url}
                      alt={item.products?.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.products?.name}</h3>
                      <p className="text-[#227337] font-bold">${item.products?.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-3 border-t">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Link 
              to="/checkout" 
              className="block w-full bg-[#227337] text-white text-center py-3 rounded-md mt-6 hover:bg-[#1b5a2b] transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}