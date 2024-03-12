import React from 'react'
import { useParams } from 'react-router'
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import all_product from '../components/assets/all_product';
import Productdisplay from '../components/productdisplay/Productdisplay';
import Discriptionbox from '../components/descriptionbox/discriptionbox';
import Relatedproduct from '../components/relatedproduct/Relatedproduct';

const Product = () => {
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrumbs  product={product}/>
      <Productdisplay  product={product}/>
      <Discriptionbox/>
      <Relatedproduct />
    </div>
  )
}

export default Product