import React from 'react';
import './Footer.css';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <h2 className="footer-title">FOCUSMATE</h2>
        <p className="footer-tagline">Virtual coworking for getting anything done.</p>
      </div>

      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <FaTwitter className="social-icon twitter" />
          <FaFacebook className="social-icon facebook" />
          <FaLinkedin className="social-icon linkedin" />
          <FaInstagram className="social-icon instagram" />
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-section">
          <h3 className="footer-heading">Product</h3>
          <ul>
            <li><a href="/how-it-works">How It Works</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/what-can-i-do">What Can I Do On Focusmate?</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/science-behind-focusmate">The Science Behind Focusmate</a></li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Resources</h3>
          <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/community-guidelines" className="footer-link">Community Guidelines</a></li>
            <li><a href="/help-center">Help Center</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li>Media</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2024 Focusmate Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;


