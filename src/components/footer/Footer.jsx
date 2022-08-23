import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>ABOUT US</h2>
            <Link to='/' href="#top">How it works</Link>
            <Link to='/investors' href="#top">Investors</Link>

          </div>
        
        </div>
        <div className='footer-link-items'>
          <h2>JOIN KIDDO</h2>
          <Link to='/register' href="#top">Register</Link>
          <Link to='/login' href="#top">Login</Link>
          <Link to='/admin' href="#top">Admin Portal</Link>
       </div>
          <div className='footer-link-items'>
            <h2>SOCIAL MEDIA</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
          <div className='footer-link-items'>
            <h2>CONTACT US</h2>
            <p>915-267-5166</p>
            <p id="kiddo-email">kiddosocialmedia@gmail.com</p>
          </div>
        </div>
    
      <div className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/home' className='social-logo'>
              KIDDO
            </Link>
          </div>
          <div className='website-rights'>KIDDO © 2022</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;