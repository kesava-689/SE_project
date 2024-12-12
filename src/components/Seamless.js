import React from "react";
import "./Seamless.css";
import bookImg from "../assets/images/bookImg.jpeg";
import calendar from "../assets/images/calendar.jpeg";
import join from "../assets/images/join.jpeg";
import { useNavigate } from "react-router-dom";

const Seamless = () => {
  const navigate = useNavigate();

  const handleExploreFeatures = () => {
    navigate("/features");
  };

  return (
    <div className="seamless-container">
      <div className="seamless-content">
        <h2 className="seamless-title">SEAMLESS</h2>
        <h3 className="seamless-subtitle">Get stuff done, seamlessly</h3>
        <p className="seamless-description">
          Book sessions, sync with your calendar, and join video calls directly
          from your browser, on desktop or mobile. No additional downloads
          required.
        </p>
        <button className="explore-button" onClick={handleExploreFeatures}>
          Explore features
        </button>
      </div>

      <div className="seamless-images">
        <div className="image-card">
          <img
            src={bookImg}
            alt="Book your sessions"
            className="image-card-img"
          />
          <div className="image-card-overlay">
            <p className="image-card-text">Book your sessions</p>
          </div>
        </div>
        <div className="image-card">
          <img
            src={calendar}
            alt="Sync to your calendar"
            className="image-card-img"
          />
          <div className="image-card-overlay">
            <p className="image-card-text">Sync to your calendar</p>
          </div>
        </div>
        <div className="image-card">
          <img
            src={join}
            alt="Join from your browser"
            className="image-card-img"
          />
          <div className="image-card-overlay">
            <p className="image-card-text">Join from your browser</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seamless;
