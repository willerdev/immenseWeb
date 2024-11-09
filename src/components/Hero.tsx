import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-[#227337] text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&w=1920&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Premium Tech Essentials
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Explore our curated collection of premium gadgets and accessories. Quality meets innovation.
          </p>
          <button className="bg-white text-[#227337] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
            <span>Shop Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}