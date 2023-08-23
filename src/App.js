import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Section id="home" title="Home" />
      <br /> {/* Line break after the Home section */}
      <Section id="careers" title="Careers" />
      <br /> {/* Line break after the Careers section */}
      <Section id="about" title="About" />
      <br /> {/* Line break after the About section */}
      <Section id="contact" title="Contact" />
      {/* No line break after the Contact section */}
    </div>
  );
};

export default App;
