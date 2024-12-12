import React from 'react';
import { Link } from 'react-router-dom';
import './CommunityPowered.css';
import communityImage from '../assets/images/community.jpg';

const CommunityPowered = () => {
  return (
    <div className="community-powered-container">
      <div className="community-powered-content">
        <div className="community-powered-image">
          <img src={communityImage} alt="Community" />
        </div>
        <div className="community-powered-text">
          <h2>COMMUNITY-POWERED</h2>
          <h3>Meet the most supportive community on Earth.</h3> <p>Students, engineers, homemakers (and more) join from 150+ countries and support each other to get stuff done. Enjoy focusing with a partner (or want to cowork with a friend)? Favorite them and book easily!</p>
          <Link to="/testimonials" className="community-testimonials-link">Read community testimonials</Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityPowered;
