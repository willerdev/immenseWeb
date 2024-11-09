export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  stock: number;
  created_at: string;
}

export interface CartItem {
  id: number;
  user_id: string;
  product_id: number;
  quantity: number;
  created_at: string;
}

export interface Order {
  id: number;
  user_id: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  shipping_address: string;
  created_at: string;
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
}

export interface WishlistItem {
  id: number;
  user_id: string;
  product_id: number;
  created_at: string;
}