import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-[#227337] text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&w=1920&q=80"
          alt="Hero Background"
          className="w-full h-[500px] object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Immense Solutions Ltd
            </h1>
          
            {/* <button className="bg-white text-[#227337] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5" />
            </button> */}
          </div>
          
          <div className="mt-8 md:mt-0 bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>(+250)788435665</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>niyiremapaccy@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}