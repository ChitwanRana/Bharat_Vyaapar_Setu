import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Seller from './components/Seller/Seller';
import Home from './components/Hero/Home';
import Buyer from './components/Buyer/Buyer';
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Seller Route */}
        <Route path="/seller" element={<Seller />} />
        <Route path="/buyer" element={<Buyer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
