const express = require("express");
const upload = require("../middleware/multer");

const {
  fetchShop,
  createProduct,
  getShops,
  createShop,
} = require("../controllers/shopsController");
const router = express.Router();
router.param("shopId", async (req, res, next, shopId) => {
  const foundShop = await fetchShop(shopId, next);
  if (foundShop) {
    req.shop = foundShop;
    next();
  } else {
    next({
      status: 404,
      message: "Shop not found",
    });
  }
});

router.get("/", getShops);
router.post("/", upload.single("imageUrl"), createShop);
router.post("/:shopId/products", upload.single("imageUrl"), createProduct);
// router.put("/:productId", upload.single("imageUrl"), updateProducts);

module.exports = router;
