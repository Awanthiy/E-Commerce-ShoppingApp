import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Men.css";
import mc1 from '../../assests/img/mc1.jpg';  
import mc2 from '../../assests/img/mc2.jpg';
import mc3 from '../../assests/img/mc3.jpg';
import mc4 from '../../assests/img/mc4.jpg';
import mc5 from '../../assests/img/mc5.jpg';
import mc6 from '../../assests/img/mc6.jpg';
import mc7 from '../../assests/img/mc7.jpg';
import mc8 from '../../assests/img/mc8.jpg';

const MenPage = () => {
  const clothingItems = [
    { id: 1, name: 'Black Sweatshirt with...', price: '$19.00', image: mc1 },
    { id: 2, name: 'White T-Shirt', price: '$15.00', image: mc2 },
    { id: 3, name: 'Blue Hoodie', price: '$25.00', image: mc3 },
    { id: 4, name: 'Striped Casual Shirt', price: '$22.50', image: mc4 },
    { id: 5, name: 'Gray Graphic Tee', price: '$18.00', image: mc5 },
    { id: 6, name: 'Denim Shorts', price: '$23.00', image: mc6 },
    { id: 7, name: 'Slim Fit Jeans', price: '$35.00', image: mc7 },
    { id: 8, name: 'Navy Crewneck Sweatshirt', price: '$21.50', image: mc8 },
    { id: 9, name: 'Cargo Shorts', price: '$28.00', image: mc8 },
    { id: 10, name: 'Plain White T-Shirt', price: '$12.00', image: mc8 },
    { id: 11, name: 'Checked Casual Shirt', price: '$26.00', image: mc8 },
    { id: 12, name: 'Black Polo Shirt', price: '$20.50', image: mc8 },
    { id: 13, name: 'Light Blue Denim Shirt', price: '$29.00', image: mc8 },
    { id: 14, name: 'Khaki Chinos', price: '$32.00', image: mc8 },
    { id: 15, name: 'Green Military Jacket', price: '$45.00', image: mc8 },
  ];

  return (
    <div className="men-clothing-page">
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
          <h2>Men Clothing</h2>
          <div className="sort-options">
            <span>New</span>
            <span className="active">Recommended</span>
          </div>
        </header>
        <div className="product-list">
          {clothingItems.map(item => (
            <div className="product-card" key={item.id}>
              <Link to={`/product/${item.id}`} className="product-image-link"> {/* Wrap image with Link */}
                <div className="product-image">
                  <img src={item.image} alt={item.name} />
                </div>
              </Link>
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

export default MenPage;
