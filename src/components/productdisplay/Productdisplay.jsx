import React, { useContext } from 'react'
import './productdisplay.css'

import {  useCart } from '../cartcontext'


const Productdisplay = (props) => {
    const {product} =props;
    const { addToCart } = useCart();

    if (!product) {
        // Handle the case where 'product' is undefined
        return <div>No product data available</div>;
      }

    const handleAddToCart = () => {
        addToCart(product.id); 
      };
     

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
            {product.image && <img src={product.image} alt="" />}
          {product.image && <img src={product.image} alt="" />}
          {product.image && <img src={product.image} alt="" />}
          {product.image && <img src={product.image} alt="" />}

            </div>
            <div className="productdisplay-img">
            {product.image && <img className='productdisplay-main-img' src={product.image} alt="" />}

            </div>
        </div>
        <div className="productdisplay-right">
            <h1>
                {product.name}
            </h1>
            <div className="productdisplay-right-star">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>

            <p> (122) </p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">INR{product.old_price}</div>
                <div className="productdisplay-right-price-new">INR{product.new_price}</div>
            </div>
            <div className="productdisplay-right-discription">
                A lightweight, usually knitted, pullover shirt, close-fitting and with a
                round neckline and full sleves, worn as an superlooking shirt or used as
                a outer garment.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>


                </div>
            </div>
            <button onClick={handleAddToCart}>ADD TO CART</button>
            <p className='productdisplay-right-category'> <span>category:</span>Men, T-shirt,Shirt </p>
           <p className='productdisplay-right-category'> <span>Tags:</span> Modern,Latest </p>

        </div>
    </div>
  )
}

export default Productdisplay