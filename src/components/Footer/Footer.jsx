

import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube , FaWhatsapp} from "react-icons/fa";
import { Link } from 'react-router-dom';

import './Footer.scss'
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" ><img src={logo} alt="logo" /></Link>
          <p>FARM2Bizz</p>
        </div>

        <div className="footer-links">
          <h4>Address</h4>
          <ul>
            <li>#3/4, 6/4, Defence Colony</li>
            <li>Chimasandra, Bidarahalli Hobli</li>
            <li>Virgonagar Post</li>
            <li> Bangalore -560049</li>
            {/* <li><a href="/privacy">Privacy Policy</a></li> */}
          </ul>
        </div>

<div className="footer-links">
  <h4>Quick Links</h4>
  <ul>
    <li><Link to="/" >Home</Link></li>
    <li><Link to="/aboutus" >About Us</Link></li>
    <li><Link to="/clients" >Clients</Link></li>
    <li><Link to="/processsteps" >Our Export</Link></li>
    <li><Link to="/crops" > Crops</Link></li>
    <li><Link to="/contact" >Contact Us</Link></li>
  </ul>
</div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
            <a href="https://www.youtube.com/"><FaYoutube /></a>
            <a href="https://wa.me/9035901469"> <FaWhatsapp /> </a>
            
          </div>
        </div>
      </div>
      

      <div className="footer-bottom">
        © {new Date().getFullYear()} FARM2Bizz All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
