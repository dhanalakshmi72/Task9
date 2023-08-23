import React from 'react';
import '../styles.css';

const Section = ({ id, title }) => {
  return (
    <section id={id} className="section">
      <div className="content">
        Welcome<br />
        to the<br />
        {title} Page
      </div>
    </section>
  );
};

export default Section;

