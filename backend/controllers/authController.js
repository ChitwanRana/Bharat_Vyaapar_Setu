// backend/controllers/authController.js
const User = require("../models/user");
const bcrypt = require("bcrypt");
const passport = require("passport"); // Ensure this line is included

exports.login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    if (!user) {
      return res
        .status(400)
        .json({ message: info.message || "Invalid credentials" });
    }
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ message: "Login failed" });
      }
      // Log session details
      req.session.userId = user.id; // Set userId
      req.session.isLoggedIn = true; // Set isLoggedIn to true

      return res.status(200).json({ message: "Login successful" });
    });
  })(req, res, next);
};

exports.signup = async (req, res) => {
  const { firstName, lastName, email, password, accountType } = req.body;
  console.log(req.body);

  // Check for missing fields
  if (!firstName || !lastName || !email || !password || !accountType) {
    return res.status(400).send({ message: "All fields are required" });
  }

  // Validate accountType value
  if (!["seller", "buyer"].includes(accountType)) {
    return res.status(400).send({ message: "Invalid account type" });
  }

  try {
    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ message: "Email already in use" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountType,
    });

    // Save the user to the database
    await user.save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    req.session.destroy((err) => {
      if (err) {
        console.log("dead session");
        return res.status(500).json({ message: "Session destruction failed" });
      }
      console.log("logout");
      res.status(200).json({ message: "Logged out successfully" });
    });
  });
};
