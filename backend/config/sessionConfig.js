// backend/config/sessionConfig.js

const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config(); // Load environment variables

const sessionConfig = () => {
  // Create a new MongoStore instance
  const mongoStore = MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    collectionName: "sessions",
    ttl: 14 * 24 * 60 * 60, // 14 days
  });

  const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET, // Change to a strong secret
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
    cookie: {
      maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    },
  });

  return sessionMiddleware;
};

module.exports = sessionConfig;
