import React from 'react'
import './Footer.css'
import footor_logo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footor-logo">
            <img src={footor_logo} alt="footor_logo"/>
            <p>FASHIONS</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footor-social-icons">
            <div className="footor-icons-container">
                <img src={instagram} alt="instagram_icon"/>
            </div>
            <div className="footor-icons-container">
                <img src={pinterest} alt="instagram_icon"/>
            </div>
            <div className="footor-icons-container">
                <img src={whatsapp} alt="instagram_icon"/>
            </div>      
        </div>
        <div className="footer-copyright">
            <hr />
            <p>copyright @ 2025 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer