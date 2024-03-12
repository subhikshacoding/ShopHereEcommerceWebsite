// cartcontext.js
import React, { createContext, useContext, useState } from 'react';
import all_product from './assets/all_product';
import Carditems from './carditems/Carditems';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
      cart[index] = 0;
    }
    return cart;
  };

  const [cardItems, setCardItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cardItems);
  };

  const removeFromCart = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cardItems)
    {
      if(cardItems[item] > 0)
      {
        let itemInfo = all_product.find((product)=>product.id === Number(item))
        totalAmount += itemInfo.new_price*cardItems[item]
      }
    }
      return totalAmount;
    
  }
  const getTotalCartItems = () => {
    let totalItem = 0;
    for(const item in cardItems)
    {
      if(cardItems[item] > 0)
      {
        totalItem += cardItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = { getTotalCartItems , getTotalCartAmount, all_product, cardItems, addToCart, removeFromCart };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
