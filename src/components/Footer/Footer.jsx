import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Need Help</h3>
          <ul>
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Returns & Refunds</li>
            <li>FAQ's</li>
            <li>Career</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Media</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>More Info</h3>
          <ul>
            <li>Term and Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Location</h3>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
        <p>Copyright © 2025Awym</p>
      </div>
    </footer>
  );
};

export default Footer;
