import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Loader } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../hooks/useCart';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  const { user } = useAuth();
  const { addToCart } = useCart(user?.id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    if (!user) return;

    try {
      setLoading(true);
      await addToCart(id, 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add to cart');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Link to={`/product/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <div className="relative aspect-square">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{name}</h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
          <p className="text-[#227337] font-bold mt-2">${price.toFixed(2)}</p>
          <button 
            onClick={handleAddToCart}
            className="mt-3 w-full bg-[#227337] text-white py-2 rounded-md hover:bg-[#1b5a2b] transition-colors flex items-center justify-center space-x-2"
            disabled={loading}
          >
            {loading ? (
              <Loader className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
          {error && (
            <p className="mt-2 text-sm text-red-500">{error}</p>
          )}
        </div>
      </div>
    </Link>
  );
}