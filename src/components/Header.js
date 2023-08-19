import React from 'react';
import { Link } from 'react-router-dom';  
import '../styles/Header.css';


function Header() {
  return (
    <header>
      <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-logo">Meditation App</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      </div>
    </nav>
  
    </header>
  );
}

export default Header;