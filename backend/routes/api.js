// backend/routes/api.js
const express = require("express");
const router = express.Router();
const User = require("../models/user"); // Make sure to import your User model

// Example API route
router.get("/hello", (req, res) => {
  res.send("Hello from the backend!");
});

router.get("/session", async (req, res) => {
  console.log("Session Data:", req.session); // Debug session data

  const isLoggedIn = req.session && req.session.isLoggedIn;
  console.log("isLoggedIn:", isLoggedIn);

  if (isLoggedIn) {
    const userId = req.session.userId || req.session.passport?.user;
    if (userId) {
      try {
        const user = await User.findById(userId); // Find user by userId
        if (user) {
          return res.status(200).json({
            isLoggedIn: true,
            accountType: user.accountType, // Include accountType in the response
          });
        } else {
          return res.status(404).json({
            isLoggedIn: false,
            error: "User not found",
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        return res.status(500).json({
          isLoggedIn: false,
          error: "Server error",
        });
      }
    }
  }

  return res.status(200).json({
    isLoggedIn: false,
    error: "User is not logged in",
  });
});


module.exports = router;
