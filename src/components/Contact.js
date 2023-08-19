import React from "react";
import "../styles/Contact.css"; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faFax,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    <div className="contact-page">
      <div className="contact-image">
        <img src="https://as1.ftcdn.net/v2/jpg/03/22/61/26/1000_F_322612671_FxibEbk9tcFoR51KZpaYGzsBVvdeLAsR.jpg" alt="Contact" />
      </div>
      <div className="contact-icons">
        <div className="contact-card">
          <div className="icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
          </div>
          <div className="info">
            <h4>Location</h4>
            <p>Chennai,Tamil Nadu</p>
          </div>
        </div>
        <div className="contact-card">
          <div className="icon">
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </div>
          <div className="info">
            <h4>Phone Number</h4>
            <p>+1234567890</p>
          </div>
        </div>
        <div className="contact-card">
          <div className="icon">
            <FontAwesomeIcon icon={faFax} size="2x" />
          </div>
          <div className="info">
            <h4>Fax</h4>
            <p>+1234567890</p>
          </div>
        </div>
        <div className="contact-card">
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </div>
          <div className="info">
            <h4>Email</h4>
            <p>contact@example.com</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
