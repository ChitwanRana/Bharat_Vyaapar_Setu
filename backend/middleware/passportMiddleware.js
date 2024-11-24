// backend/middleware/passportMiddleware.js
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "Invalid email or password." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: "Invalid email or password." });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  console.log("Serializing user:", user);
  done(null, user.id); // Ensure user.id exists and is correct
});


passport.deserializeUser(async (userId, done) => {
  try {
    console.log("Deserializing user with ID:", userId);
    const user = await User.findById(userId);
    if (!user) {
      console.error("User not found for ID:", userId);
      return done(new Error("User not found"), null);
    }
    return done(null, user);
  } catch (err) {
    console.error("Error deserializing user:", err);
    return done(err, null);
  }
});

module.exports = passport;
