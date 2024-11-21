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
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    // Fetch the user by ID using async/await
    const user = await User.findById(userId);

    if (!user) {
      return done(new Error("User not found"), null);
    }

    // Pass the user to the done callback
    return done(null, user);
  } catch (err) {
    console.error("Error deserializing user:", err);
    return done(err, null);
  }
});

module.exports = passport;
