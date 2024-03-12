import React, { useContext } from 'react'
import './navbar.css'
import productlogo from '../assets/productlogo1.jpg'
import { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import CartContext from '../cartcontext';

const Navbar = () => {
  const[menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(CartContext)
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={productlogo} alt="" />
        <p>SHOPHERE</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu==="shop" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu("men")}}> <Link style={{textDecoration:'none'}} to="/mens"> Men</Link> {menu==="mens" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu("women")}}> <Link style={{textDecoration:'none'}} to="/womens">Women</Link> {menu==="womens" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link  style={{textDecoration:'none'}}to="/kids">Kids</Link> {menu ==="kids" ? <hr/> : <></>}</li>
      </ul>
      <div className='nav-logo-cart'>
       <Link to="/login"><button>Login</button></Link>
       <Link to="/cart"><ShoppingCartOutlinedIcon className='image'></ShoppingCartOutlinedIcon> </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
    </div>
    </div>
  )
}

export default Navbar;