import React from 'react';
import './CommunityTestimonials.css';
import example from '../assets/images/example.jpeg';
const CommunityTestimonials = () => {
  return (
    <div className="community-testimonials">
    <h1 className="section-heading">Hear From Our Community Members</h1>
      <div className="testimonial-card">
        <h2>One of the best productivity tools</h2>
        <p className="testimonial-content">
          "Focusmate is one of the best productivity tools I’ve found. It is built around
          pre-commitment pacts — a psychological device that helps you get started and
          follow through on just about any task. Focusmate is an effective and accessible
          tool anyone can use — so much so that I mention it in my book *Indistractable*."
        </p>
        <div className="testimonial-footer">
          <img 
            src= {example}
            alt="Nir Eyal"
            className="testimonial-image"
          />
          <p>
            <strong>Nir Eyal</strong> <br />
            Author, Indistractable & Hooked <br />
            40+ sessions
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityTestimonials;
