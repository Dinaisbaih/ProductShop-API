const express = require("express");

const {
  createProduct,
  deleteProduct,
  getProducts,
  updateProducts,
  fetchProduct,
} = require("../controllers/productsController");
const router = express.Router();
router.param("productId", async (req, res, next, productId) => {
  const product = await fetchProduct(productId, next);
  if (product) {
    req.product = product;
    next();
  } else {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  }
});
router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:productId", deleteProduct);
router.put("/:productId", updateProducts);

module.exports = router;
