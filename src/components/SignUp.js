import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      setError('');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="logo-container">
          <h1 className="logo">FOCUSMATE</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <h2>Create your account</h2>

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

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          <div className="signin-link">
            <p>
              Already have an account? <Link to="/signin">Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
