import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-[#227337] font-bold mt-2">${price.toFixed(2)}</p>
          <button className="mt-3 w-full bg-[#227337] text-white py-2 rounded-md hover:bg-[#1b5a2b] transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}