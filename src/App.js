import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Navigation from './components/Navigation';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navigation />
          <Header />
          <div className="container">
             {/* Navigational routes */}
            <Routes>
              <Route 
                path="/" 
                element={<About />} 
              />
              <Route 
                path="/contact" 
                element={<Contact />} 
              />
                <Route 
                path="/portfolio" 
                element={<Portfolio />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
