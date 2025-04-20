import React, { useState } from 'react';
import './Navigation.css';
import { Heart, User, ShoppingCart, Search } from 'lucide-react';

const Navigation = () => {
  const [activeIcons, setActiveIcons] = useState({
    heart: false,
    user: false,
    cart: false,
  });

  const toggleIcon = (icon) => {
    setActiveIcons((prevState) => ({
      ...prevState,
      [icon]: !prevState[icon],
    }));
  };

  return (
    <div className="nav">
      <div className="nav-left">
        <h2 className="logo">ShopEase</h2>
        <ul className="nav-links">
          <li className="active">Shop</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
      </div>

      <div className="nav-right">
        <div className="search-box">
          <Search size={16} />
          <input type="text" placeholder="Search" />
        </div>
        <Heart
          className={`nav-icon ${activeIcons.heart ? 'active-icon' : ''}`}
          onClick={() => toggleIcon('heart')}
        />
        <User
          className={`nav-icon ${activeIcons.user ? 'active-icon' : ''}`}
          onClick={() => toggleIcon('user')}
        />
        <ShoppingCart
          className={`nav-icon ${activeIcons.cart ? 'active-icon' : ''}`}
          onClick={() => toggleIcon('cart')}
        />
      </div>
    </div>
  );
};

export default Navigation;
