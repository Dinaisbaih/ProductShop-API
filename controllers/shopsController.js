const { Product, Shop } = require("../db/models");
exports.getShops = async (req, res) => {
  try {
    const shops = await Shop.findAll({
      attributes: { exclude: ["id", "name"] },
      include: {
        model: Product,
        as: "products",
        attributes: ["id"],
      },
    });
    res.json(shops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createShop = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.imageUrl = `http://${req.get("host")}/media/${
        req.file.filename
      }`;
    }
    console.log(req.body);
    // req.body.shopId = req.shop.id;
    const newShop = await Shop.create(req.body);
    res.status(201).json(newShop);
  } catch (error) {
    next(error);
  }
};

exports.fetchShop = async (shopId, next) => {
  try {
    const shop = await Shop.findByPk(shopId);
    return shop;
  } catch (error) {
    next(error);
  }
};
exports.createProduct = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.imageUrl = `http://${req.get("host")}/media/${
        req.file.filename
      }`;
    }
    console.log(req.body);
    req.body.shopId = req.shop.id;
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};
