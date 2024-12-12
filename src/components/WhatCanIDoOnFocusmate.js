import React from 'react';
import { Link } from 'react-router-dom';
import './WhatCanIDoOnFocusmate.css';
function WhatCanIDoOnFocusmate() {
  return (
    <div className="container" style={{ backgroundColor: '#f0f9ff', padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>What Can I Do On Focusmate?</h1>
      <p style={{ textAlign: 'center' }}>A few ways our community uses Focusmate!</p>
      
      <div className="content-block">
        <h3>Coding</h3>
        <p>Writing software, doing code reviews, or fixing bugs? Get in the zone with Focusmate.</p>
      </div>
      
      <div className="content-block">
        <h3>Planning your day</h3>
        <p>Kickstart your day, make to-do lists, or set up appointments.</p>
      </div>
      
      <div className="content-block">
        <h3>Studying</h3>
        <p>Preparing for an exam? Finishing up homework? Reading for tomorrow’s class? Focusmate can help you focus!</p>
      </div>
      
      <div className="content-block">
        <h3>Housework</h3>
        <p>Plants need watering? Laundry needs folding? Dishes need doing? Focusmate is here to help!</p>
      </div>
      
      <div className="content-block">
        <h3>Writing and research</h3>
        <p>Your daily journal, your groundbreaking research proposal, or the final chapter of your bestselling novel – whatever it is, you can write it with Focusmate.</p>
      </div>

      <div className="content-block">
        <h3>Meditation, yoga, and exercise</h3>
        <p>Energize or unwind, with support and motivation from a Focusmate partner.</p>
      </div>

      <div className="content-block">
        <h3>Creative work</h3>
        <p>Painting? Sculpting? Composing music? Focusmate can help get your creativity flowing.</p>
      </div>

      <div className="content-block">
        <h3>Chores</h3>
        <p>Focusmate can help you get ahead of chores—whether you are booking flights, ordering groceries, or filing taxes.</p>
      </div>

      <div className="content-block">
        <h3>Anything else!</h3>
        <p>Focusmate helps you stay focused for just about anything you want to achieve!</p>
      </div>

      <div className="explore-faq" style={{ textAlign: 'center', marginTop: '20px' }}>
        <h4>Join for free</h4>
        <a href="/faq" style={{ color: '#007bff', textDecoration: 'underline' }}>Explore more questions in our FAQ</a>
      </div>
    </div>
  );
}

export default WhatCanIDoOnFocusmate;
