import React from 'react'
import './footer.css'
import {LiaFacebookSquare} from 'react-icons/lia'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import flogo from '../../images/logo.png'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'><img src={flogo} alt="" /></a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#search">Search</a></li>
        <li><a href="#map">Map</a></li>
        <li><a href="#alerts">Alerts</a></li>
        <li><a href="#contact">Contact</a></li>        
      </ul>
      <div className="footer-socials">
        <a href="https://facebook.com"><LiaFacebookSquare className='social-icon'/></a>
        <a href="https://Instagram.com"><AiOutlineInstagram className='social-icon'/></a>
        <a href="https://Linkedin.com"><AiOutlineLinkedin className='social-icon'/></a>
      </div>
        <div className="footer-copyright">
          <small>&copy; Abdul's Site. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer