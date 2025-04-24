import React from 'react';
import './Hero.css';

import hero from '../../assests/img/hero2.jpg';
import jeans from '../../assests/img/jeans.jpg';
import shirts from '../../assests/img/shirts.jpg';
import tshirts from '../../assests/img/tshirts.jpg';
import Frocks from '../../assests/img/frocks.jpg';
import frock from '../../assests/img/frock.jpg';
import Hoodies from '../../assests/img/Hoodies.jpg';
import Coats from '../../assests/img/Coats.jpg';
import Tees from '../../assests/img/Tees.jpg';
import mc1 from '../../assests/img/mc1.jpg';
import mc2 from '../../assests/img/mc2.jpg';
import mc3 from '../../assests/img/mc3.jpg';
import mc4 from '../../assests/img/mc4.jpg';
import mc5 from '../../assests/img/mc5.jpg';
import mc6 from '../../assests/img/mc6.jpg';
import mc7 from '../../assests/img/mc7.jpg';
import mc8 from '../../assests/img/mc8.jpg';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-section">
        <img src={hero} alt="Summer Value Pack" className="hero-image" />
        <div className="hero-text">
          <h4>T-Shirt / Tops</h4>
          <h1>Summer Value Pack</h1>
          <p>cool / colorful / comfy</p>
          <button className="shop-now">Shop Now</button>
        </div>
      </div>

      <div className="new-arrival">
        <h2>New Arrival</h2>
        <div className="item-row1">
          <div>
            <img src={jeans} alt="Jeans" />
            <p>Jeans</p>
             
          </div>
          <div>
            <img src={shirts} alt="Shirts" />
            <p>Shirts</p>
             
          </div>
          <div>
            <img src={Frocks} alt="Frocks" />
            <p>Frocks</p>
             
          </div>
          <div>
            <img src={tshirts} alt="T-Shirts" />
            <p>T-Shirt</p>
             
          </div>
        </div>
      </div>

      <div className="category-women">
        <h2>Categories For Women</h2>
        <div className="item-row">
          <div>
            <img src={Hoodies} alt="Hoodies & Sweatshirts" />
            <p>Hoodies & Sweetshirt</p>
            <a href="#">Explore here</a>
          </div>
          <div>
            <img src={Coats} alt="Coats & Parkas" />
            <p>Coats & Parkas</p>
            <a href="#">Explore here</a>
          </div>
          <div>
            <img src={Tees} alt="Tees & T-Shirts" />
            <p>Tees & T-Shirt</p>
            <a href="#">Explore here</a>
          </div>
          <div>
            <img src={frock} alt="Jeans" />
            <p>Frocks</p>
            <a href="#">Explore here</a>
          </div>
        </div>
      </div>

      <div className="category-men">
        <h2>Categories For Men</h2>
        <div className="item-row">
          <div>
            <img src={mc1} alt="Shirts" />
            <p>Shirts</p>
            <a href="#">Explore here</a>
          </div>
          <div>
            <img src={mc2} alt="Printed T-Shirts" />
            <p>Printed T-Shirts</p>
            <a href="#">Explore here</a>
          </div>
          <div>
            <img src={mc3} alt="Plain T-Shirts" />
            <p>Plain T-Shirt</p>
            <a href="#">Explore here</a>
          </div>
          <div>
            <img src={mc4} alt="Polo T-Shirts" />
            <p>Polo T-Shirt</p>
            <a href="#">Explore here</a>
          </div>
          <div>
            <img src={mc5} alt="Sweatshirts" />
            <p>Hoodies & Sweetshirt</p>
            <a href="#">Explore here</a>
          </div>
          <div>
            <img src={mc6} alt="Jeans" />
            <p>Jeans</p>
            <a href="#">Explore here</a>
          </div>
          <div>
            <img src={mc7} alt="Joggers" />
            <p>Activewear</p>
            <a href="#">Explore here</a>
          </div>
          <div>
            <img src={mc8} alt="Sleeveless" />
            <p>Mens Jackets</p>
            <a href="#">Explore here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
