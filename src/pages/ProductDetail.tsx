import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Loader, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../hooks/useCart';
import { supabase } from '../lib/supabase';
import { Product } from '../types/database.types';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addToCart } = useCart(user?.id);
  const [product, setProduct] = useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);
  const [addingToWishlist, setAddingToWishlist] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch product details
        const { data: productData, error: productError } = await supabase
          .from('products')
          .select(`
            *,
            categories (
              name,
              description
            )
          `)
          .eq('id', id)
          .single();

        if (productError) throw productError;
        setProduct(productData);

        // Fetch similar products from the same category
        if (productData) {
          const { data: similarData, error: similarError } = await supabase
            .from('products')
            .select('*')
            .eq('category_id', productData.category_id)
            .neq('id', productData.id)
            .limit(4);

          if (similarError) throw similarError;
          setSimilarProducts(similarData || []);
        }

        // Check if product is in user's wishlist
        if (user) {
          const { data: wishlistData } = await supabase
            .from('wishlist_items')
            .select('*')
            .eq('user_id', user.id)
            .eq('product_id', id)
            .single();

          setIsInWishlist(!!wishlistData);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, user]);

  const handleAddToCart = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      setAddingToCart(true);
      await addToCart(Number(id), 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add to cart');
    } finally {
      setAddingToCart(false);
    }
  };

  const toggleWishlist = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      setAddingToWishlist(true);
      if (isInWishlist) {
        await supabase
          .from('wishlist_items')
          .delete()
          .eq('user_id', user.id)
          .eq('product_id', id);
      } else {
        await supabase
          .from('wishlist_items')
          .insert({ user_id: user.id, product_id: id });
      }
      setIsInWishlist(!isInWishlist);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update wishlist');
    } finally {
      setAddingToWishlist(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <Loader className="w-8 h-8 text-[#227337] animate-spin" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-red-500 flex items-center space-x-2">
          <AlertCircle className="w-5 h-5" />
          <span>{error || 'Product not found'}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
              <p className="text-2xl font-bold text-[#227337] mt-4">{product.price.toFixed(2)} Frw</p>
              <div className="mt-6 space-y-4">
                <p className="text-gray-600">{product.description}</p>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={addingToCart}
                    className="flex-1 bg-[#227337] text-white py-3 px-6 rounded-md hover:bg-[#1b5a2b] transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {addingToCart ? (
                      <Loader className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={toggleWishlist}
                    disabled={addingToWishlist}
                    className={`p-3 border rounded-md transition-colors ${
                      isInWishlist
                        ? 'border-red-500 text-red-500 hover:bg-red-50'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {addingToWishlist ? (
                      <Loader className="w-5 h-5 animate-spin" />
                    ) : (
                      <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        {similarProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#227337] mb-6">Similar Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarProducts.map((similarProduct) => (
                <div
                  key={similarProduct.id}
                  onClick={() => navigate(`/product/${similarProduct.id}`)}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
                >
                  <img
                    src={similarProduct.image_url}
                    alt={similarProduct.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">{similarProduct.name}</h3>
                    <p className="text-[#227337] font-bold mt-2">${similarProduct.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}