import React from 'react';
import './HelpCenter.css';

const HelpCenter = () => {
    return (
        <div className="help-center">
            <h1 className="help-center-title">Focusmate Help Center</h1>
            <div className="help-center-categories">
                <div className="help-center-category">
                    <h2>Focusmate Explained</h2>
                    <p>Learn more about Focusmate and who it’s for.</p>
                </div>
                <div className="help-center-category">
                    <h2>Getting Started</h2>
                    <p>Discover the basics and how to begin.</p>
                </div>
                <div className="help-center-category">
                    <h2>Features, Tips & Tricks</h2>
                    <p>Explore helpful tips and new features.</p>
                </div>
                <div className="help-center-category">
                    <h2>Account & Billing</h2>
                    <p>Manage your account and subscription.</p>
                </div>
                <div className="help-center-category">
                    <h2>Trust & Safety</h2>
                    <p>Learn about security, compliance, and reporting.</p>
                </div>
                <div className="help-center-category">
                    <h2>Troubleshooting</h2>
                    <p>Find answers to common questions and issues.</p>
                </div>
                <div className="help-center-category">
                    <h2>Community & Contacts</h2>
                    <p>Read community rules and find resources.</p>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
