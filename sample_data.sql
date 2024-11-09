-- Insert sample categories
INSERT INTO categories (name, description, image_url) VALUES
('Headphones', 'High-quality audio devices for immersive sound experience', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'),
('Smartwatches', 'Modern timepieces with smart features', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'),
('Cameras', 'Professional photography equipment', 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80'),
('Accessories', 'Essential gadget accessories', 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80');

-- Insert sample products
INSERT INTO products (name, description, price, image_url, category_id, stock) VALUES
('Premium Wireless Headphones', 'High-end wireless headphones with noise cancellation', 299.99, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80', 1, 50),
('Smart Watch Series X', 'Advanced smartwatch with health monitoring', 399.99, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', 2, 30),
('Professional Camera Kit', 'Complete professional photography kit', 1299.99, 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80', 3, 20),
('Designer Sunglasses', 'Premium designer sunglasses', 199.99, 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80', 4, 40),
('Wireless Earbuds Pro', 'Premium wireless earbuds with charging case', 249.99, 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80', 1, 100),
('Fitness Tracker Elite', 'Advanced fitness tracking device', 149.99, 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?auto=format&fit=crop&w=800&q=80', 2, 75);