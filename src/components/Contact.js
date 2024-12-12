// Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <p>Questions? Feature requests? Media queries? This is the right page.</p>
      <p>Hello! We are honored that you want to contact us!</p>
      <p>
        You can email us directly at <a href="focusmate@focusmate.com">focusmate@focusmate.com</a>. However, here are a few links that might help you get what you need more quickly:
      </p>
      <ul className="contact-list">
        <li>
          Questions, concerns, testimonials? <a href="#" target="_blank" rel="">Post them in our Facebook group</a>.
        </li>
        <li>
          Feedback and feature requests? <a href="#" target="_blank" rel="">Submit here</a>.
        </li>
        
      </ul>
    </div>
  );
};

export default Contact;
