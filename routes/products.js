const express = require("express");

const {
  createProduct,
  deleteProduct,
  getProducts,
} = require("../controllers/productsController");
const router = express.Router();

router.post("/", createProduct);

router.delete("/:productId", deleteProduct);

router.get("/", getProducts);

module.exports = router;
