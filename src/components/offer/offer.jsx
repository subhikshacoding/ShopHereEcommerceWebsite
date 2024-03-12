import React from 'react'
import './offer.css'
import exclusivepic from '../assets/exclusivepic.jpg'

const Offer = () => {
  return (
    <div className='offers'>
        <div className="offer-left">
            <h1>Eclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusivepic} alt="" style={{width:'200px', alignItems:'center'}}/>
        </div>
    </div>
  )
}

export default Offer