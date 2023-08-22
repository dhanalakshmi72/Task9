import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import SignIn from './components/SignIn';


import Footer from './components/Footer';
import CustomerReviews from './components/CustomerReviews';
import CollectionsPage from './components/CollectionsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          
          <Route path="/customer-reviews" element={<CustomerReviews />} />
          
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<MainContent />} />
          <Route path="/collections" element={<CollectionsPage />} />
        </Routes>
       <Footer />
      </div>
    </Router>
  );
}

export default App;

