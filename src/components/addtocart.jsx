import React, { useContext } from 'react';
import { useCart } from './cartcontext'

const Addtocart = () => {
  const { cardItems, addToCart, removeFromCart } = useCart();
  

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {Object.keys(cardItems).map((itemId) => (
          <li key={itemId}>
            Item ID: {itemId} - Quantity: {cardItems[itemId]}
            <button onClick={() => addToCart(itemId)}>Add One</button>
            <button onClick={() => removeFromCart(itemId)}>Remove One</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Addtocart;
