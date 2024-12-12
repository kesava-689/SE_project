import React from "react";
import './CommunityGuidelines.css';

const CommunityGuidelines = () => {
    return (
        <div className="community-guidelines">
            <header className="guidelines-header">
                <h1>Community Guidelines</h1>
                <p>Join us in building the most supportive community on earth</p>
            </header>
            
            <section className="guidelines-section">
                <h2>Community Pledge</h2>
                <p>Creating a safe and supportive Focusmate environment comes down to how each one of us shows up for each other, day to day, moment to moment.</p>
                <ul>
                    <li><strong>Honor your commitments:</strong> Show up on time, keep your video on, and stay for the whole session.</li>
                    <li><strong>Be kind:</strong> Encourage and cheer on your partner.</li>
                    <li><strong>Be professional:</strong> Treat your partner with respect and professionalism.</li>
                    <li><strong>Protect your attention:</strong> Minimize distractions and focus on the work at hand.</li>
                    <li><strong>Work with rigor and intention:</strong> Inspire your partner with your effort and commitment.</li>
                </ul>
            </section>

            <section className="guidelines-section">
                <h2>How to Be Productive on Focusmate</h2>
                <ol>
                    <li><strong>Prepare for your session:</strong> Eliminate interruptions, grab essentials, and be ready.</li>
                    <li><strong>Kick off your session:</strong> Greet your partner and clearly outline your session goals.</li>
                    <li><strong>Get to work:</strong> Work quietly, post updates, and remain focused.</li>
                    <li><strong>Wrap up:</strong> Celebrate your achievements with your partner.</li>
                </ol>
            </section>

            <section className="guidelines-section">
                <h2>Forbidden Behaviors</h2>
                <p>To keep the community safe, the following behaviors are strictly prohibited:</p>
                <ul>
                    <li>No nudity, sexual acts, or sexual harassment.</li>
                    <li>No threats, violence, or harm to others or yourself.</li>
                    <li>No hateful conduct or harassment.</li>
                    <li>No flirting or inappropriate comments.</li>
                    <li>No inappropriate attire.</li>
                    <li>No selling or promotional content.</li>
                </ul>
            </section>

            <section className="guidelines-section">
                <h2>What to Do If You Encounter Bad Behavior</h2>
                <p>If you experience any bad behavior, follow these steps:</p>
                <ol>
                    <li><strong>Take care of yourself:</strong> Close your browser tab if necessary to remove distress.</li>
                    <li><strong>Report the offending member:</strong> Report incidents to Focusmate for action.</li>
                    <li><strong>Block the offending member:</strong> Block them to prevent further interactions.</li>
                </ol>
            </section>
        </div>
    );
};

export default CommunityGuidelines;
