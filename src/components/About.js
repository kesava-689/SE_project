// About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Focusmate</h1>
      <section className="about-section">
        <p>
          Focusmate changes the way you work by connecting you to other professionals who have 
          committed to being accountable for finishing their most important work.
        </p>
        <p>
          You choose a time to work, and Focusmate pairs you with an accountability partner for a live, 
          virtual coworking session that will keep you on task.
        </p>
        <p>
          Research in psychology and behavioral science shows that regular human connection reduces 
          the likelihood that a worker will procrastinate or become distracted.
        </p>
        <p>
          The Focusmate virtual coworking model is rooted in evidence-based approaches to productivity, 
          and systems of accountability developed by leading executive and leadership coaches.
        </p>
      </section>

      <section className="about-purpose">
        <h2>Purpose</h2>
        <p>
          To empower people and groups to achieve their goals by unlocking the power of psychology, 
          technology and the human spirit.
        </p>
      </section>

      <section className="about-mission">
        <h2>Mission</h2>
        <p>To help everyone do their best work.</p>
      </section>
    </div>
  );
};

export default About;
