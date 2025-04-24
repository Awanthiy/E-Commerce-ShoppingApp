import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Women.css";
 
// Fixed and unique imports
import wc1 from '../../assests/img/wc1.jpg';
import wc2 from '../../assests/img/wc2.jpg';
import wc3 from '../../assests/img/wc3.jpg';
import wc4 from '../../assests/img/wc4.jpg';
import wc5 from '../../assests/img/wc5.jpg';
import wc6 from '../../assests/img/wc6.jpg';
import wc7 from '../../assests/img/wc7.jpg';
import wc8 from '../../assests/img/wc8.jpg';
import wc9 from '../../assests/img/wc9.jpg';
import wc10 from '../../assests/img/wc10.jpg';
import wc11 from '../../assests/img/wc11.jpg';
import wc12 from '../../assests/img/wc12.jpg';
import wc13 from '../../assests/img/wc13.jpg';
import wc14 from '../../assests/img/wc14.jpg';
import wc15 from '../../assests/img/wc15.jpg';

const WomenPage = () => {
  const clothingItems = [
    { id: 1, name: 'Black Sweatshirt with...', price: '$19.00', image: wc1 },
    { id: 2, name: 'White T-Shirt', price: '$15.00', image: wc2 },
    { id: 3, name: 'Purple Hoodie', price: '$22.00', image: wc3 },
    { id: 4, name: 'Lemon Pattern White...', price: '$17.50', image: wc4 },
    { id: 5, name: 'White Graphic Crop Top', price: '$16.00', image: wc5 },
    { id: 6, name: 'Black Shorts', price: '$21.00', image: wc6 },
    { id: 7, name: 'Women\'s Skinny Jeans', price: '$27.00', image: wc7 },
    { id: 8, name: 'Crewneck Sweatshirt', price: '$19.50', image: wc8 },
    { id: 9, name: 'Denim Shorts', price: '$25.00', image: wc9 },
    { id: 10, name: 'Black Basic T-Shirt', price: '$14.00', image: wc10 },
    { id: 11, name: 'Floral Print Cami Top', price: '$18.00', image: wc11 },
    { id: 12, name: 'Black Crop Top', price: '$16.50', image: wc12 },
    { id: 13, name: 'Floral Top', price: '$16.50', image: wc13 },
    { id: 14, name: 'Denim Frock', price: '$16.50', image: wc14 },
    { id: 15, name: 'Black Skirt', price: '$16.50', image: wc15 },
  ];

  return (
    <div className="women-clothing-page">
      <aside className="sidebar">
        <div className="filter-section">
          <h2>Filter</h2>
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              <li><input type="checkbox" id="shirts" /> <label htmlFor="shirts">Shirts</label></li>
              <li><input type="checkbox" id="tshirts" /> <label htmlFor="tshirts">T-shirts</label></li>
              <li><input type="checkbox" id="sweatshirts" /> <label htmlFor="sweatshirts">Sweatshirts</label></li>
              <li><input type="checkbox" id="hoodies" /> <label htmlFor="hoodies">Hoodies</label></li>
              <li><input type="checkbox" id="jackets" /> <label htmlFor="jackets">Jackets</label></li>
              <li><button className="view-more">+ 16 more</button></li>
            </ul>
          </div>

          <div className="color-filter">
            <h3>Colors</h3>
            <ul className="colors-list">
              <li><button className="color-swatch black"></button></li>
              <li><button className="color-swatch blue"></button></li>
              <li><button className="color-swatch gray"></button></li>
              <li><button className="color-swatch white"></button></li>
              <li><button className="color-swatch green"></button></li>
              <li><button className="color-swatch brown"></button></li>
              <li><button className="color-swatch navy"></button></li>
              <li><button className="color-swatch olive"></button></li>
              <li><button className="color-swatch red"></button></li>
              <li><button className="color-swatch orange"></button></li>
              <li><button className="color-swatch yellow"></button></li>
              <li><button className="color-swatch lightblue"></button></li>
            </ul>
          </div>

          <div className="size-filter">
            <h3>Size</h3>
            <ul className="sizes-list">
              <li><button>S</button></li>
              <li><button>M</button></li>
              <li><button>L</button></li>
              <li><button>XL</button></li>
              <li><button>XXL</button></li>
              <li><button>XXXL</button></li>
              <li><button>Regular</button></li>
              <li><button>Slim</button></li>
            </ul>
          </div>
        </div>
      </aside>
      
      <main className="product-grid">
        <header className="grid-header">
          <h2>Women Clothing</h2>
          <div className="sort-options">
            <span>New</span>
            <span className="active">Recommended</span>
          </div>
        </header>
        <div className="product-list">
          {clothingItems.map(item => (
            <div className="product-card" key={item.id}>
              <div className="product-image">
                <Link to={`/PDetail/${item.id}`} state={item}> {/* Pass item state here */}
                  <img src={item.image} alt={item.name} />
                </Link>
              </div>
              <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                <span className="product-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WomenPage;
