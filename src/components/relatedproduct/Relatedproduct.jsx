import React from 'react'
import'./relatedproduct.css'
import Data_product from '../assets/data'
import Item from '../items/item'

const Relatedproduct = () => {
  return (
    <div className='relatedproduct'>
        <h1>Related products</h1>
        <hr/>
        <div className="relatedproduct-items">
            {Data_product.map((item,i)=>{
                return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Relatedproduct