const express = require('express');
const router = express.Router();
const { getProducts, createProduct ,getProductById ,createQuery,submitContactForm} = require('../controllers/productController');
const upload = require('../middleware/upload');

// Map routes to controller functions
router.post('/create', upload.single('image'), createProduct); // Create a new product
router.get('/getAllProducts', getProducts); // Get all products
router.post('/createQuery', createQuery); // Create a new product enquiry

router.get('/:id', getProductById); // Get a single product by ID
router.post('/contact/submit', submitContactForm);

module.exports = router;