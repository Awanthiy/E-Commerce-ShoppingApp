import React from 'react';
import './Hero.css'; // Import the CSS

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-category">T-Shirt / Tops</p>
          <h1 className="hero-title">Summer<br />Value Pack</h1>
          <p className="hero-desc">cool / colorful / comfy</p>
          <button className="hero-btn">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
