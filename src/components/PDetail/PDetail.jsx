import React, { useState } from "react";
import "./PDetail.css";
import wc3 from "../../assests/img/wc3.jpg"; // Make sure this path is correct

const PDetail = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("black");

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = [
    { name: "Pink", value: "pink" },
    { name: "Red", value: "red" },
    { name: "Gold", value: "gold" },
    { name: "Black", value: "black" },
  ];

  return (
    <div className="product-detail-container">
      {/* First Column: Thumbnails */}
      <div className="product-images">
        <div className="thumbnail-list">
          <img src={wc3} alt="thumbnail 1" />
          <img src={wc3} alt="thumbnail 2" />
          <img src={wc3} alt="thumbnail 3" />
          <img src={wc3} alt="thumbnail 4" />
        </div>
      </div>

      {/* Second Column: Main Image */}
      <div className="main-image">
        <img src={wc3} alt="Raven Hoodie" />
      </div>

      {/* Third Column: Product Info */}
      <div className="product-info">
        <nav className="breadcrumbs">Shop &gt; Women &gt; Top</nav>
        <h2 className="product-title">Raven Hoodie With Black Colored Design</h2>
        <div className="ratings">
          <span className="stars">★★★★☆</span>
          <span className="rating-value">4.2</span>
          <span className="comments">(120 comments)</span>
        </div>

        <div className="size-select">
          <h4>
            Select Size <span className="size-guide">Size Guide</span>
          </h4>
          <div className="size-buttons">
            {sizes.map(size => (
              <button
                key={size}
                className={selectedSize === size ? "active" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="color-select">
          <h4>Colours Available</h4>
          <div className="color-options">
            {colors.map(color => (
              <button
                key={color.value}
                className={`color-btn ${color.value} ${
                  selectedColor === color.value ? "selected" : ""
                }`}
                onClick={() => setSelectedColor(color.value)}
              ></button>
            ))}
          </div>
        </div>

        <div className="add-to-cart-section">
          <button className="add-to-cart-btn">Add to cart</button>
          <span className="price">$63.00</span>
        </div>

        <div className="features">
          <p>✅ Secure payment</p>
          <p>✅ Free shipping</p>
          <p>✅ Size & Fit</p>
          <p>✅ Free Shipping & Returns</p>
        </div>
      </div>
    </div>
  );
};

export default PDetail;