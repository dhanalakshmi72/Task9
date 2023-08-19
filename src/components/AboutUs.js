import React from "react";
import "../styles/AboutUs.css"; // Import your CSS file
import features from "./features"; // Import your feature data

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.image} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

