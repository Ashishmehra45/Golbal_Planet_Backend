const express = require("express");
const router = express.Router();
const {
  getQueries,
  getProducts,
  createProduct,
  getProductById,
  createQuery,
  submitContactForm,
  getContactSubmissions,
} = require("../controllers/productController");
const upload = require("../middleware/upload");

// Map routes to controller functions
router.post("/create", upload.single("image"), createProduct); // Create a new product
router.get("/getAllProducts", getProducts); // Get all products
router.post("/createQuery", createQuery); // Create a new product enquiry
router.get("/product/inquiries", getQueries); // Get all product enquiries

router.get("/:id", getProductById); // Get a single product by ID
router.post("/contact/submit", submitContactForm);
router.get("/contact/submissions", getContactSubmissions);

module.exports = router;
