const Product = require("../models/product");

const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);

    if (!req.file) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    const { name, category, desc } = req.body;

    const product = await Product.create({
      name,
      category,
      desc,
      image: req.file.path,
    });

    console.log("Saved Product:", product);

    return res.status(201).json({
      success: true,
      product,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts, createProduct, getProductById };
