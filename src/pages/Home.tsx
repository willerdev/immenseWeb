import React from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Smart Watch Series X",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Professional Camera Kit",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24 md:pb-8">
      <Hero />
      <SearchBar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-[#227337] mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}