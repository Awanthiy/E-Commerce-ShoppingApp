import React, { useState } from 'react';
import './Navigation.css';
import { Heart, User, ShoppingCart, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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

  const location = useLocation();

  return (
    <div className="nav">
      <div className="nav-left">
        <h2 className="logo">ShopEase</h2>
        <ul className="nav-links">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Shop</Link>
          </li>
          <li className={location.pathname === '/men' ? 'active' : ''}>
            <Link to="/men">Men</Link>
          </li>
          <li className={location.pathname === '/women' ? 'active' : ''}>
            <Link to="/women">Women</Link>
          </li>
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
        <Link to="/signin">
          <User
            className={`nav-icon ${activeIcons.user ? 'active-icon' : ''}`}
            onClick={() => toggleIcon('user')}
          />
        </Link>
        <Link to="/cart">
          <ShoppingCart
            className={`nav-icon ${activeIcons.cart ? 'active-icon' : ''}`}
            onClick={() => toggleIcon('cart')}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
