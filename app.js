const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Import Routes
const productRoutes = require('./route/productRoutes');


// Initialize App
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://your-frontend.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
); // Allow cross-origin requests from React frontend
app.use(express.json()); // Allow parsing JSON in req.body

// Mount Routes
app.use('/api/products', productRoutes);

// Base route for testing
app.get('/', (req, res) => {
  res.send('globalPlanet API is running...');
});

// Export the configured app
module.exports = app;