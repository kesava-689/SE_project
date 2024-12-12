import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both email and password.');
    } else {
      setError('');
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <div className="logo-container">
          <h1 className="logo">FOCUSMATE</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <h2>Sign in to your account</h2>

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

          <button type="submit" className="signin-btn">
            Sign in
          </button>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <div className="signup-link">
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
