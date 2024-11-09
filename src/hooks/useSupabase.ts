import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Product, CartItem, Order, WishlistItem } from '../types/database.types';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*');

        if (error) throw error;
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}

export function useCart(userId: string) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      const { data } = await supabase
        .from('cart_items')
        .select(`
          *,
          products (*)
        `)
        .eq('user_id', userId);

      setCartItems(data || []);
      setLoading(false);
    };

    fetchCart();

    // Subscribe to real-time cart updates
    const subscription = supabase
      .channel('cart_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'cart_items', filter: `user_id=eq.${userId}` },
        (payload) => {
          fetchCart();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [userId]);

  const addToCart = async (productId: number, quantity: number = 1) => {
    const { data, error } = await supabase
      .from('cart_items')
      .upsert({
        user_id: userId,
        product_id: productId,
        quantity
      });

    if (error) throw error;
    return data;
  };

  return { cartItems, loading, addToCart };
}

export function useOrders(userId: string) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (
            *,
            products (*)
          )
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      setOrders(data || []);
      setLoading(false);
    };

    fetchOrders();
  }, [userId]);

  return { orders, loading };
}

export function useWishlist(userId: string) {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      const { data } = await supabase
        .from('wishlist_items')
        .select(`
          *,
          products (*)
        `)
        .eq('user_id', userId);

      setWishlistItems(data || []);
      setLoading(false);
    };

    fetchWishlist();
  }, [userId]);

  const toggleWishlistItem = async (productId: number) => {
    const existingItem = wishlistItems.find(item => item.product_id === productId);

    if (existingItem) {
      await supabase
        .from('wishlist_items')
        .delete()
        .eq('id', existingItem.id);
    } else {
      await supabase
        .from('wishlist_items')
        .insert({
          user_id: userId,
          product_id: productId
        });
    }
  };

  return { wishlistItems, loading, toggleWishlistItem };
}