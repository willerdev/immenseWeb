export const getTotalCartItems = (cartItems: any[]) => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };