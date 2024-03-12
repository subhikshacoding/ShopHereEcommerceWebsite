import React from 'react'
import './newcollection.css';
import Item from '../items/item';
import New_collection from '../assets/new_collection';

const Newcollection = () => {
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
          {New_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

          })}
            
        </div>

    </div>
  )
}

export default Newcollection