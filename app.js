const express = require('express');
const cors = require('cors');

// Import Routes
const productRoutes = require('./routes/productRoutes');

// Initialize App
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests from React frontend
app.use(express.json()); // Allow parsing JSON in req.body

// Mount Routes
app.use('/api/products', productRoutes);

// Base route for testing
app.get('/', (req, res) => {
  res.send('globalPlanet API is running...');
});

// Export the configured app
module.exports = app;