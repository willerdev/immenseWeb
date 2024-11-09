import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#227337] focus:border-transparent"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>
      
      <div className="flex items-center justify-center space-x-4 mt-4">
        <button className="text-sm text-gray-600 hover:text-[#227337]">Headphones</button>
        <button className="text-sm text-gray-600 hover:text-[#227337]">Smartwatches</button>
        <button className="text-sm text-gray-600 hover:text-[#227337]">Cameras</button>
        <button className="text-sm text-gray-600 hover:text-[#227337]">Accessories</button>
      </div>
    </div>
  );
}