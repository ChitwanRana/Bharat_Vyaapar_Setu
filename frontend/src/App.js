import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "../src/App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import Seller from "./components/Seller/Seller";
import Home from "./components/Hero/Home";
import Buyer from "./components/Buyer/Buyer";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import NotiFlow from "./components/NotiFlow";
import Chatbot from "./components/ChatBot"; // Import your chatbot component
import SocialDetails from "./components/SocialDetails";
import { MapInsights } from "./components/MapInsights";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [accountType, setAccountType] = useState("home"); // Track account type
  const navigate = useNavigate();

  // Check login status function
  const checkLoginStatus = async () => {
    const response = await fetch("https://bharat-vyaapar-setu-e522.onrender.com/api/session", {
      method: "GET",
      credentials: "include", // To include session cookie
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setIsLoggedIn(data.isLoggedIn); // Assuming the response has `isLoggedIn`
      if (data.isLoggedIn) {
        setAccountType(data.accountType); // Assuming the response includes accountType
      }
    } else {
      setIsLoggedIn(false); // Reset accountType if not logged in
    }
  };

  useEffect(() => {
    checkLoginStatus(); // Check session status on component mount
  }, []);

  const handleLogout = async () => {
    // Call the logout API endpoint
    await fetch("https://bharat-vyaapar-setu-e522.onrender.com/auth/logout", {
      method: "POST",
      credentials: "include", // Ensure the session cookie is included
    });

    // After logout, update the state
    setIsLoggedIn(false);
    setAccountType("home"); // Clear account type after logout
    toast.success("Logged out successfully");
    navigate("/signin"); // Redirect to login page after logout
  };

  return (
    <>
      <ToastContainer />
      <Navbar
        accountType={accountType}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />
      <NotiFlow />

      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        <Route
          path="/signin"
          element={
            <SignIn
              setIsLoggedIn={setIsLoggedIn}
              checkLoginStatus={checkLoginStatus} // Pass the function here
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/insights" element={<MapInsights />} />

        {/* Seller Route */}
        <Route path="/seller" element={<Seller />} />
        <Route path="/buyer" element={<Buyer />} />
      </Routes>

      <Footer />
      <SocialDetails />
      {/* Add the Chatbot component */}
      <Chatbot />
    </>
  );
}

export default App;
