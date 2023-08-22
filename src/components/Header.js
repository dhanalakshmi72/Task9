import React from 'react';
import { Link } from 'react-router-dom';  
import '../styles/Header.css';
function Header() {
  return (
    <header>
      <nav className="navbar">
      <div className="nav-content">
        <ul className="nav-links">
          <li className="first-child">Books<span>Cart</span></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/collections">View Collections</Link></li>
          <li><Link to="/customer-reviews">Customer Reviews</Link></li>
          <li><Link to="/signin">Sign In</Link></li> 
        </ul>
      </div>
    </nav>
  </header>
  );
}
export default Header;