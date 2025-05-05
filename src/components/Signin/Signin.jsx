import React, { useState } from 'react';
import './Signin.css';
import si1 from '../../assests/img/si1.png';

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signin-container">
      <div className="signin-left">
        <img src={si1} alt="Sign In Visual" />
      </div>

      <div className="signin-right">
        <h2>Sign In</h2>

        <button className="google-button">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
          />
          Continue With Google
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <form>
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <a href="#" className="forgot-password">Forgot your password</a>

          <button type="submit" className="signin-button">Sign In</button>
        </form>

        <p className="signup-text">
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
