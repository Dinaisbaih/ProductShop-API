const express = require("express");

const {
  createProduct,
  deleteProduct,
  getProducts,
  updateProducts,
} = require("../controllers/productsController");
const router = express.Router();

router.post("/", createProduct);

router.delete("/:productId", deleteProduct);

router.get("/", getProducts);
router.put("/:productId", updateProducts);

module.exports = router;
