import React from 'react';
import icon from '../assets/images/value.png';
import globalimage from '../assets/images/global.png';
import logo from '../assets/images/website-logo.png';
import './Global.css';

function Global() {
    return (
        <div className="global">
            <div className="global-container">
                {/* Left Content */}
                <div className="global-text-section">
                    <h1 className="global-heading">Get More Done Solo, <br /> Not Alone</h1>
                    <h3 className="global-quote">Know Focus, Know Result. <br /> No Focus, No Result.</h3>
                    <p className="global-description">
                        Unlock the power of focused productivity with a supportive community. 
                        Share your journey, set your goals, and achieve more with people who understand 
                        your challenges and celebrate your victories. Whether you're working on a project, 
                        building a habit, or seeking motivation, we've got you covered.
                    </p>
                    <div className="icon-text">
                        <img src={icon} alt="" className="diamond" />
                        <p>Connect with a supportive ADHD community of people who get it.</p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="global-image-section">
                    <img src={globalimage} alt="Global Collaboration" className="global-image" />
                    {/* Overlapping Logo */}
                    <img src={logo} alt="Website Logo" className="logo-overlay" />
                </div>
            </div>
        </div>
    );
}

export default Global;

