import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo"><Link to="/" className="logo-link logo-btn">FOCUSMATE</Link></div>
      <ul className="nav-links">
        {/* Dropdown Button */}
        <li className="dropdown">
          <button className="dropdown-btn" onClick={toggleDropdown}>
            Product ▼
          </button>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={handleClick}>
                <Link to="/how-it-works">How it Works</Link>
              </li>
              <li onClick={handleClick}>
                <Link to="/features">Features</Link>
              </li>
              <li onClick={handleClick}>
                <Link to="/what-can-i-do">What Can I Do On Focusmate?</Link>
              </li>
              <li onClick={handleClick}>
                <Link to="/science-behind-focusmate">The Science Behind Focusmate</Link>
              </li>
              <li onClick={handleClick}>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          )}
        </li>
        {/* Other Nav Links */}
        <li><Link to="/faq" className="nav-item">FAQ</Link></li>
        <li><Link to="/testimonials" className="nav-item">Testimonials</Link></li>
        <li><Link to="/signin" className="nav-item">Sign in</Link></li>
        <li><Link to="/signup" className="join-btn">Join for free</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
