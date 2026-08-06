const express = require('express');
const router = express.Router();
const { getProducts, createProduct } = require('../controllers/productController');
const upload = require('../middleware/upload');

// Map routes to controller functions
router.post('/create', upload.single('image'), createProduct); // Create a new product
router.get('/getAllProducts', getProducts); // Get all products

module.exports = router;