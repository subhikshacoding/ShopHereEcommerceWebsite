import React from 'react'
import './breadcrumbs.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Breadcrumbs = (props) => {
    const{product} = props;
  return (
    <div className='breadcrumbs'>
        HOME <ArrowForwardIosIcon/> SHOP <ArrowForwardIosIcon />{product.category} <ArrowForwardIosIcon/>{product.name}

    </div>
  )
}

export default Breadcrumbs