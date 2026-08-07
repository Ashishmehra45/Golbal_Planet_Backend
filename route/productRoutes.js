const express = require('express');
const router = express.Router();
const { getProducts, createProduct ,getProductById } = require('../controllers/productController');
const upload = require('../middleware/upload');

// Map routes to controller functions
router.post('/create', upload.single('image'), createProduct); // Create a new product
router.get('/getAllProducts', getProducts); // Get all products

router.get('/:id', getProductById); // Get a single product by ID

module.exports = router;