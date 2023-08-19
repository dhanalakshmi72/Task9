import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import SignIn from './components/SignIn';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<MainContent />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;

