import React from 'react'
import './newsletter.css';

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
    
    <div>

    <input type="email" placeholder='your email id' />
    <button>subscribe</button>
    </div>
    </div>
  )
}

export default Newsletter