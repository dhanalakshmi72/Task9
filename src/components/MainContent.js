
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/MainContent.css';

function MainContent({ children }) {
  return (
    <div className="main-content">
      <div className="background-image">
        <Header />
        <div className="content">
          {children} {/* This will render the content of the child components */}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MainContent;

