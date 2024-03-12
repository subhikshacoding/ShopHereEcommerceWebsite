import React, { useContext } from 'react'
import './carditems.css'
import CartContext, { useCart } from '../cartcontext';
import ClearIcon from '@mui/icons-material/Clear';

const Carditems = () => {
  const { getTotalCartAmount,all_product, cardItems, removeFromCart } = useContext(CartContext);

  return (
    <div className='cartitems'>
        <div className="cartitem-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>

        </div>
        <hr/>

        {  all_product.map((e)=>{
                  if (cardItems[e.id] > 0) 

        {
          return <div>
          <div className="cartitem-format-main cartitems-format">
          <img src={e.image} alt="" className='carticon-product-icon'></img>
          <p>{e.name}</p>
          <p>INR {e.new_price}</p>
          <button className='cartitems-quantity'>{cardItems[e.id]}</button>
          <p> INR {e.new_price*cardItems[e.id]}</p>
          <ClearIcon onClick={() => { removeFromCart(e.id) }} className='cartitems-remove-icon' />

        </div>
        <hr />
        </div>
        
      }
      return null;
    })}
    <div className="cartitems-down">
      <div className="cartitems-total">
        <h1>Cart Total</h1>
        <div className="cartitems-total-item">
          <p>Subtotal</p>
          <p>INR {getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cartitems-total-item">
          <p>Shipping Fee</p>
          <p>Free</p>
        </div>
        <hr />
        <div className="cartitems-total-item">
          <h3>Total</h3>
          <h3>INR {getTotalCartAmount()}</h3>
        </div>
      </div>
      <button className='cartitembtn'>PROCCED TO CHECKOUT</button>
    </div>
    <div className="cartitems-promocode">
      <p>if you have a promo code, enter it here</p>
      <div className="cartitems-promobox">
        <input type="text" placeholder='promo code'></input>
        <button>Submit</button>
        </div>
      </div>
    </div>
    
  
      
        )
}
        
    
    
        
    

export default Carditems