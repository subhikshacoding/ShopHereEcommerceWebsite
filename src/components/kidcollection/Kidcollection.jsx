import React from 'react'
import './kidcollection.css'
import Kid_collections from '../assets/kidproduct'
import { Link } from 'react-router-dom'
import Item from '../items/item'
import kid_banner from '../assets/kid_banner.jpg'
import banner from '../assets/banner.jpg'



const Kidcollection = () => {
  return (
    <div className='kidscollection'>
        <h1> Kids Collections

        </h1>
        <hr />
        <img src={banner} alt="" className='kidbanner'></img>
        <div className='collections'>
        {Kid_collections.map((item, i) => {
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

export default Kidcollection