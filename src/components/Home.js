import React from 'react';
import './Home.css';
import MotionText from './MotionText';
import FlexibleSessions from './FlexibleSessions';
import CommunityPowered from './CommunityPowered';
import Seamless from './Seamless';
import HowItWorks from './HowItWorks';
import FAQ from './FAQ';
import CommunityTestimonials from './CommunityTestimonials';
import VirtualCoworking from './VirtualCoworking';
import logo from '../assets/images/focusmate.png';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-container">
        {/* Image Section */}
        <div className="home-image">
          <img src={logo} alt="Focusmate" className="image" />
        </div>
        
        {/* Text Section */}
        <div className="home-content">
          <h1>Focused. Productive. Together.</h1>
          <p>Virtual coworking for getting anything done.</p>
          <p className="home-description">
            Unlock your potential with Focusmate. Connect with like-minded individuals,
            stay on task, and achieve your goals. Together, we thrive.
          </p>
          <div className="home-buttons">
            <a href="#join" className="btn-join">Join for free</a>
            <a href="#demo" className="btn-demo">Watch demo</a>
          </div>
          <p className="no-credit-card">No credit card required.</p>
        </div>
      </div>
      <MotionText />
      <FlexibleSessions />
      <CommunityPowered />
      <Seamless />
      <HowItWorks />
      <FAQ />
      <CommunityTestimonials />
      <VirtualCoworking />
    </div>
  );
};

export default Home;
