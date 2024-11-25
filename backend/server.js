// backend/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const sessionConfig = require('./config/sessionConfig');
const passport = require('./middleware/passportMiddleware');
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5001;

// CORS Configuration
const allowedOrigins = [
  'https://bharatvyaparsetu.netlify.app', // Deployed frontend
  'http://localhost:3000', // Local development
];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.options('*', cors()); // Handle preflight requests

app.use(express.json());
app.use(bodyParser.json());

// Session middleware
app.use(sessionConfig());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build'))); // Adjust 'frontend' if necessary

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// 404 Error handler
/*app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '../frontend/build', 'error.html'));
});*/

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
