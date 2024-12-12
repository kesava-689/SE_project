import React, { useState } from 'react';
import { FaCalendarAlt, FaVideo, FaCommentDots, FaRegEye, FaPuzzlePiece, FaGenderless } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const [expandedFeature, setExpandedFeature] = useState(null);

  const handleToggle = (index) => {
    if (expandedFeature === index) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(index);
    }
  };

  const features = [
    {
      title: '25, 50, & 75 minute sessions',
      description: 'Use 25-minute sessions to finish quick tasks, or focus for longer with 50 and 75-minute sessions.',
      icon: <FaCalendarAlt />,
      image: 'your-image-path-1.jpg',
    },
    {
      title: 'Favorite partners',
      description: 'Work with your favorite Focusmate partners or choose a coworking buddy.',
      icon: <FaVideo />,
      image: 'your-image-path-2.jpg',
    },
    {
      title: 'Native video',
      description: 'Join your sessions without needing to open any other apps for video calls.',
      icon: <FaCommentDots />,
      image: 'your-image-path-3.jpg',
    },
    {
      title: 'Task Modes',
      description: 'Choose from different task modes like Desk Mode, Moving, and Anything.',
      icon: <FaRegEye />,
      image: 'your-image-path-4.jpg',
    },
    {
      title: 'Quiet Mode',
      description: 'Focus even when you cannot use a microphone in quiet environments like libraries.',
      icon: <FaPuzzlePiece />,
      image: 'your-image-path-5.jpg',
    },
    {
      title: 'Matching preferences',
      description: 'Choose your preferred gender matching for Focusmate sessions.',
      icon: <FaGenderless />,
      image: 'your-image-path-6.jpg',
    },
  ];

  return (
    <div className="features-container">
      <h2 className="features-heading">Features</h2>
      <p className="features-subheading">Learn about what Focusmate has to offer</p>
      
      {features.map((feature, index) => (
        <div
          key={index}
          className={`feature-item ${index % 2 === 0 ? '' : 'reverse'}`}
          onClick={() => handleToggle(index)}
        >
          <div className="feature-text">
            <h2>{feature.title}</h2>
            <p className="feature-content">{feature.description}</p>
            {expandedFeature === index && (
              <div className="expanded-content">
                More details about this feature.
              </div>
            )}
          </div>
          <div className="feature-image">
            <img src={feature.image} alt={feature.title} />
          </div>
        </div>
      ))}

      <div className="more-features">
        <h2 className="more-features-heading">More Features</h2>
        
        <div className="more-feature-row">
          <div className="more-feature-item">
            <FaCalendarAlt className="feature-icon" />
            <h3 className="feature-subheading">Calendar invites</h3>
            <p>Get calendar invites and never miss a session. Supported on most major calendars including Apple, Google, and Outlook.</p>
          </div>
          <div className="more-feature-item">
            <FaVideo className="feature-icon" />
            <h3 className="feature-subheading">Video add-ons</h3>
            <p>Virtual backgrounds, Screensharing, and Video effects.</p>
          </div>
        </div>

        <div className="more-feature-row">
          <div className="more-feature-item">
            <FaCommentDots className="feature-icon" />
            <h3 className="feature-subheading">Session chat</h3>
            <p>Share your session goals, update your partner, or chat in quiet settings.</p>
          </div>
          <div className="more-feature-item">
            <FaRegEye className="feature-icon" />
            <h3 className="feature-subheading">Picture-in-picture</h3>
            <p>Keep your partner in view while you work on other tasks.</p>
          </div>
        </div>

        <div className="more-feature-row">
          <div className="more-feature-item">
            <FaPuzzlePiece className="feature-icon" />
            <h3 className="feature-subheading">Helpful integrations</h3>
            <p>Google Calendar, Beeminder, Developer API.</p>
          </div>
          <div className="more-feature-item">
            <FaGenderless className="feature-icon" />
            <h3 className="feature-subheading">Matching preferences</h3>
            <p>Choose your preferred gender matching for Focusmate sessions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
