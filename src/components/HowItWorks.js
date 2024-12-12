import React, { useState } from "react";
import "./HowItWorks.css";
import bookASession from "../assets/images/bookASession.jpg";
import vedioCallImg from "../assets/images/vedioCallImg.jpg";
import progressImg from "../assets/images/progressImg.jpg";

const HowItWorks = () => {
  const [activeBlock, setActiveBlock] = useState(null);

  const toggleBlock = (block) => {
    setActiveBlock(activeBlock === block ? null : block);
  };

  return (
    <div className="how-it-works-container">
      <h2 className="how-it-works-title">How it works</h2>

      <div className="how-it-works-blocks">
        <div
          className={`work-block ${activeBlock === 1 ? "active" : ""}`}
          onClick={() => toggleBlock(1)}
        >
          <img
            src={bookASession}
            alt="Book a session"
            className="work-block-img"
          />
          <div className="work-block-content">
            <h3 className="block-title">1. Book a session</h3>
            <p className="block-description">
              We’ll match you with a member of our wonderful community whenever
              you want to focus.
            </p>
          </div>
        </div>
        <div
          className={`work-block ${activeBlock === 2 ? "active" : ""}`}
          onClick={() => toggleBlock(2)}
        >
          <img
            src={vedioCallImg}
            alt="Join video call"
            className="work-block-img"
          />
          <div className="work-block-content">
            <h3 className="block-title">2. Join video call</h3>
            <p className="block-description">
              Greet your partner, share your session goals and get to work!
            </p>
          </div>
        </div>
        <div
          className={`work-block ${activeBlock === 3 ? "active" : ""}`}
          onClick={() => toggleBlock(3)}
        >
          <img
            src={progressImg}
            alt="Celebrate your progress"
            className="work-block-img"
          />
          <div className="work-block-content">
            <h3 className="block-title">3. Celebrate your progress</h3>
            <p className="block-description">
              At the end of the session, check in with your partner and
              celebrate your progress!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
