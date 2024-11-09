import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { CartItem } from '../types/database.types';

export function useCart(userId: string | undefined) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;
    
    const fetchCart = async () => {
      try {
        const { data, error } = await supabase
          .from('cart_items')
          .select(`
            id,
            user_id,
            product_id,
            quantity,
            products (*)
          `)
          .eq('user_id', userId);

        if (error) throw error;
        setCartItems(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch cart items');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();

    const subscription = supabase
      .channel('cart_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'cart_items', filter: `user_id=eq.${userId}` },
        fetchCart
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [userId]);

  const addToCart = async (productId: number, quantity: number = 1) => {
    if (!userId) throw new Error('User must be logged in');

    try {
      const { data: existingItem } = await supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', userId)
        .eq('product_id', productId)
        .maybeSingle();

      if (existingItem) {
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity: existingItem.quantity + quantity })
          .eq('id', existingItem.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('cart_items')
          .insert([{ user_id: userId, product_id: productId, quantity }]);

        if (error) throw error;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add item to cart');
      throw err;
    }
  };

  const updateQuantity = async (itemId: number, quantity: number) => {
    if (!userId) return;

    try {
      if (quantity < 1) {
        await removeFromCart(itemId);
        return;
      }

      const { error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('id', itemId)
        .eq('user_id', userId);

      if (error) throw error;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update quantity');
      throw err;
    }
  };

  const removeFromCart = async (itemId: number) => {
    if (!userId) return;

    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', itemId)
        .eq('user_id', userId);

      if (error) throw error;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to remove item from cart');
      throw err;
    }
  };

  return {
    cartItems,
    loading,
    error,
    addToCart,
    updateQuantity,
    removeFromCart
  };
}