const express = require('express');
const router = express.Router();
const { getProducts, createProduct } = require('../controllers/productController');

// Map routes to controller functions
router.post('/create', createProduct); // Create a new product
router.get('/getAllProducts', getProducts); // Get all products

module.exports = router;