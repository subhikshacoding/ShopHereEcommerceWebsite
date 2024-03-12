import React from 'react'
import './footer.css'
import footerlogo from '../assets/footer_logo.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footerlogo} alt=""  />
            <p>SHOPHERE</p>
        </div>
        <ul className="footer-links">
            <li>company</li>
            <li>products</li>
            <li>office</li>
            <li>about</li>
            <li>contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
           < InstagramIcon />
           </div>

           <div className="footer-icons-container">
             <WhatsAppIcon />
             </div>
             <div className="footer-icons-container">
            <PinterestIcon/>
           


            </div>
        </div>
       <div className='footer-copyright'>
        <hr />
        <p>Copyright @ 2023 - All Rights Reserved</p>
       </div>
    </div>
  )
}

export default Footer