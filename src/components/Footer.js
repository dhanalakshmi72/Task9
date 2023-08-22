import React from 'react';
import '../styles/Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faWhatsapp, faLinkedin,faInstagram,faYoutube ,faPinterest} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="/" className="social-icon">
        <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="/" className="social-icon">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        <a href="/" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="/" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="/" className="social-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="/" className="social-icon">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <div className="copy-right">BookCart © 2023.All rights reserved.</div>
    </footer>
  );
};

export default Footer;


