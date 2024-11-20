import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Seller from './components/Seller/Seller';
import Home from './components/Hero/Home';
import Buyer from './components/Buyer/Buyer';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        
        {/* Seller Route */}
        <Route path="/seller" element={<Seller />} />
        <Route path="/buyer" element={<Buyer />} />
      </Routes>
    </Router>
  );
}

export default App;
