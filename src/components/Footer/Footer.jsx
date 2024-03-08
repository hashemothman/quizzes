import React from 'react'
import youtubeicon from './../../assets/images/YouTube-Icon-Full-Color-Logo.wine.svg'
import instaicon from './../../assets/images/Instagram-Logo.wine.svg'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='footer'>
        <div className='footerone'>
        <h3>Contact Us</h3>
        <p>Travel helps companies manage payments easily</p>
            <div className='footer-icons'>
                <img src={youtubeicon}/>
                <img src={instaicon}/>
            </div>
        </div>
        <div className='footertwo'>
        <h3>Company</h3>
            <p>AboutUs</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Pricing</p>
            
        </div>
        <div className='footerthree'>
            <h3>Destinations</h3>
            <p>Maldives</p>
            <p>Los Angelas</p>
            <p>Las Vegas</p>
            <p>Torronto</p>
        </div>
        
    </div>
    
    </div>
  )
}

export default Footer