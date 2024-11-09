import React from 'react';
import { Home, ShoppingCart, User, Package } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
        <div className="grid grid-cols-4 gap-1">
          <Link to="/" className={`flex flex-col items-center py-3 ${isActive('/') ? 'text-[#227337]' : 'text-gray-500'}`}>
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link to="/cart" className={`flex flex-col items-center py-3 ${isActive('/cart') ? 'text-[#227337]' : 'text-gray-500'}`}>
            <ShoppingCart className="w-6 h-6" />
            <span className="text-xs mt-1">Cart</span>
          </Link>
          <Link to="/orders" className={`flex flex-col items-center py-3 ${isActive('/orders') ? 'text-[#227337]' : 'text-gray-500'}`}>
            <Package className="w-6 h-6" />
            <span className="text-xs mt-1">Orders</span>
          </Link>
          <Link to="/profile" className={`flex flex-col items-center py-3 ${isActive('/profile') ? 'text-[#227337]' : 'text-gray-500'}`}>
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </div>

      {/* Desktop Footer */}
      <footer className="hidden md:block bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About immense</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-[#227337]">About Us</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#227337]">Careers</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#227337]">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-[#227337]">Contact Us</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#227337]">Shipping Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#227337]">Returns & Exchanges</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/orders" className="text-gray-500 hover:text-[#227337]">Track Order</Link></li>
                <li><Link to="/wishlist" className="text-gray-500 hover:text-[#227337]">Wishlist</Link></li>
                <li><Link to="/profile" className="text-gray-500 hover:text-[#227337]">My Account</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-500 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#227337]"
                />
                <button className="px-4 py-2 bg-[#227337] text-white rounded-r-md hover:bg-[#1b5a2b]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-500">
            <p>&copy; 2024 immense. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}