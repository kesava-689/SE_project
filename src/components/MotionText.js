import React from 'react';
import './MotionText.css';

const MotionText = () => {
  return (
    <div className="motion-text-container">
      <div className="motion-text">
        <div className="motion-block" style={{ backgroundColor: '#ffcccb' }}>
          <span className="symbol">✈️</span> Booking a flight
        </div>
        <div className="motion-block" style={{ backgroundColor: '#f0e68c' }}>
          <span className="symbol">📧</span> Responding to email
        </div>
        <div className="motion-block" style={{ backgroundColor: '#98fb98' }}>
          <span className="symbol">🧹</span> Cleaning my room
        </div>
        <div className="motion-block" style={{ backgroundColor: '#add8e6' }}>
          <span className="symbol">🎥</span> Watching a seminar
        </div>
        <div className="motion-block" style={{ backgroundColor: '#ffb6c1' }}>
          <span className="symbol">📚</span> Preparing a lesson
        </div>
        <div className="motion-block" style={{ backgroundColor: '#ffe4b5' }}>
          <span className="symbol">🎸</span> Practicing the guitar
        </div>
        <div className="motion-block" style={{ backgroundColor: '#e0ffff' }}>
          <span className="symbol">🔍</span> Doing a code review
        </div>
        <div className="motion-block" style={{ backgroundColor: '#dcdcdc' }}>
          <span className="symbol">🍽️</span> Making dinner
        </div>
        <div className="motion-block" style={{ backgroundColor: '#f5f5dc' }}>
          <span className="symbol">📖</span> Studying for an exam
        </div>
        <div className="motion-block" style={{ backgroundColor: '#fffacd' }}>
          <span className="symbol">🖼️</span> Making a mood board
        </div>
        <div className="motion-block" style={{ backgroundColor: '#dda0dd' }}>
          <span className="symbol">📅</span> Planning my day
        </div>
        <div className="motion-block" style={{ backgroundColor: '#e6e6fa' }}>
          <span className="symbol">✍️</span> Writing a novel
        </div>
      </div>
    </div>
  );
};

export default MotionText;
