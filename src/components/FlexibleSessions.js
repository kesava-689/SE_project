import React from 'react';
import { Link } from 'react-router-dom';
import './FlexibleSessions.css';

const FlexibleSessions = () => {
  return (
    <div className="flexible-sessions-container">
      {/* Left Side: Text */}
      <div className="flexible-text">
        <h2 className="animated-title">FLEXIBLE</h2>
        <p className="animated-description">
          Focus for a bit, or for a while. 25, 50, and 75-minute sessions to finish daily chores 
          (plants need watering?) or tackle bigger projects (let’s finish that thesis).
        </p>
        <Link to="/features" className="explore-button">
          Explore Features
        </Link>
      </div>

      {/* Right Side: Non-linear Diagram */}
      <div className="flexible-diagram">
        <div className="circle time-25">
          <span className="time-label">25 Min</span>
        </div>
        <div className="circle time-50">
          <span className="time-label">50 Min</span>
        </div>
        <div className="circle time-75">
          <span className="time-label">75 Min</span>
        </div>
      </div>
    </div>
  );
};

export default FlexibleSessions;
