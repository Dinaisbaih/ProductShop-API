let products = require("../data");
var slugify = require("slugify");
const { Product } = require("../db/models");

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Not Found" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const foundProduct = await Product.findByPk(req.params.productId);
    if (foundProduct) {
      foundProduct.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ message: "not found" });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProducts = async (req, res) => {
  try {
    const foundProduct = await Product.findByPk(req.params.productId);
    if (foundProduct) {
      foundProduct.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ message: "not found" });
  }
};
