const express = require("express");
const productRouter = express.Router();
const Product = require("../models/product");

productRouter.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find().sort({ _id: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

productRouter.get("/api/products/:category", async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = productRouter;
