import React from 'react';
import { User, Package, Heart, LogOut } from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-[#227337] rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h2 className="mt-4 text-xl font-semibold">John Doe</h2>
                <p className="text-gray-500">john.doe@example.com</p>
              </div>
              
              <div className="mt-6 space-y-2">
                <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-50 flex items-center space-x-3">
                  <Package className="w-5 h-5" />
                  <span>Orders</span>
                </button>
                <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-50 flex items-center space-x-3">
                  <Heart className="w-5 h-5" />
                  <span>Wishlist</span>
                </button>
                <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-50 flex items-center space-x-3 text-red-500">
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#227337] focus:ring focus:ring-[#227337] focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#227337] focus:ring focus:ring-[#227337] focus:ring-opacity-50" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#227337] focus:ring focus:ring-[#227337] focus:ring-opacity-50" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#227337] focus:ring focus:ring-[#227337] focus:ring-opacity-50" rows={3}></textarea>
                </div>
                
                <button type="submit" className="w-full bg-[#227337] text-white py-2 px-4 rounded-md hover:bg-[#1b5a2b] transition-colors">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}