import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../hooks/useCart';
import { getTotalCartItems } from '../utils/cartUtils';

export default function Navbar() {
  const { user } = useAuth();
  const { cartItems } = useCart(user?.id);
  const totalItems = getTotalCartItems(cartItems);

  return (
    <nav className="bg-[#227337] text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="https://i.imgur.com/T6VKzsH.png" alt="Logo" className="w-10 h-8" />
          <span className="text-2xl font-bold">Immense S.</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-[#227337] rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold">
                {totalItems}
              </span>
            )}
          </Link>
          <Link to="/profile">
            <User className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
}