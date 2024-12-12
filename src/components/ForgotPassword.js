import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email address.');
    } else {
      setError('');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <div className="logo-container">
          <h1 className="logo">FOCUSMATE</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <h2>Forgot your password?</h2>

          {error && <div className="error-message">{error}</div>}

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="reset-btn">
            Reset Password
          </button>

          <div className="signin-link">
            <p>
              Remember your password? <Link to="/signin">Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
