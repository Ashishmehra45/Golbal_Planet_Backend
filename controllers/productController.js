const Product = require('../models/product');


const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


const createProduct = async (req, res) => {
  try {
    const { name, category,image, desc } = req.body;

    const product = new Product({
      name, category, image, desc
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: "Invalid product data", error: error.message });
  }
};

module.exports = { getProducts, createProduct };