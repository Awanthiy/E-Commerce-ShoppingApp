// Cart.jsx
import React, { useState } from 'react';
import './Cart.css';
import { FaTrash } from 'react-icons/fa';
import mc3 from '../../assests/img/mc3.jpg';
import mc4 from '../../assests/img/mc4.jpg';
import mc5 from '../../assests/img/mc5.jpg';
import mc6 from '../../assests/img/mc6.jpg';

const initialCartItems = [
  {
    id: 1,
    name: 'Blue Flower Print Crop Top',
    color: 'Yellow',
    size: 'M',
    price: 37,
    quantity: 1,
    shipping: 0,
    image: mc3
  },
  {
    id: 2,
    name: 'Levender Sweatshirt',
    color: 'Levender',
    size: 'XXL',
    price: 133,
    quantity: 2,
    shipping: 0,
    image: mc4
  },
  {
    id: 3,
    name: 'Black Plain T-shirt',
    color: 'Black',
    size: 'XXL',
    price: 77,
    quantity: 2,
    shipping: 5,
    image: mc5
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>PRODUCT DETAILS</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>SHIPPING</th>
            <th>SUBTOTAL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td className="product-details">
                <img src={item.image} alt={item.name} />
                <div>
                  <div className="product-name">{item.name}</div>
                  <div className="product-meta">Color : {item.color}</div>
                  <div className="product-meta">Size : {item.size}</div>
                </div>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </td>
              <td>{item.shipping === 0 ? 'FREE' : `$${item.shipping.toFixed(2)}`}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td><FaTrash className="delete-icon" onClick={() => deleteItem(item.id)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="summary">
        <div className="summary-row">
          <span>Total</span> 
          <span>${total.toFixed(2)}</span>
        </div>
       
      </div>
      <button className="checkout-btn">Log in to Checkout</button>
    </div>
  );
};

export default Cart;
