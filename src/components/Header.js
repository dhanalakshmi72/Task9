import React from 'react';
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header>
      <div className="logo text-center ">
        <img src="https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png" alt='logo' width='60px' height='40px'></img>
        Amazon</div>
      <nav>
        <ul>
          <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
          <li><a href="#careers" onClick={(e) => handleNavClick(e, '#careers')}>Careers</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


