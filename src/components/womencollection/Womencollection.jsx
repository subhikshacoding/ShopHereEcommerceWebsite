import React from 'react'
import './womencollection.css'
import Women_collections from '../assets/womenproduct'
import Item from '../items/item'
import { Link } from 'react-router-dom'
import banner_women from '../assets/banner_women.jpg'
import banner from '../assets/banner.jpg'

const Womencollection = () => {
  return (
    <div className='womencollection'>
        <h1> womens Collections</h1>
        <hr />
        <img src={banner} alt="" className='womenbanner'></img>
        <div className='collections'>
        {Women_collections.map((item, i) => {
           return <Item key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
        
})}
    </div>
    </div>
  )
}

export default Womencollection