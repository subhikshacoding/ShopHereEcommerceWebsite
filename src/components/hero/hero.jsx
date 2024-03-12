import React from 'react'
import './hero.css'
import WavingHandTwoToneIcon from '@mui/icons-material/WavingHandTwoTone';
import pose1 from "../assets/logo1.jpg";
import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
          <div>
        <div className='hero-hand-icon'>
            <p>new</p>
            <WavingHandTwoToneIcon style={{width:'5rem',height:'5rem',color:'yellow'}}/>
      </div>
        <p className='text'>collection</p>
        <p className='text'> for everyone</p>
        </div>
      
        
        <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <ArrowRightAltTwoToneIcon  className='image'/>
            </div>


        </div>
        <div className='hero-right'>
        <img src={pose1} alt=''   className='img'/>

        </div>

    </div>
  )
}

export default Hero