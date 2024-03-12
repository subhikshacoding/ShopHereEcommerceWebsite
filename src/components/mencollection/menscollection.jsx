import React from 'react'
import './mencollection.css'
import men_collections from '../assets/menproduct';
import Item from '../items/item';
import { Link } from 'react-router-dom';
import banner_men from '../assets/banner_men.jpg'


const MenCollection = () => {
  return (
  
      <div className='menscollection'>
      <h1>Mens collections</h1>
      <hr />
      <img src={banner_men} alt=""  className='menbanner'></img>
      <div className='collections'>
        {men_collections.map((item, i) => {
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

export default MenCollection;


      