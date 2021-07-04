const { Product, Shop } = require("../db/models");

// exports.createProduct = async (req, res, next) => {
//   try {
//     if (req.file) {
//       req.body.imageUrl = `http://${req.get("host")}/media/${
//         req.file.filename
//       }`;
//     }
//     req.body.shopId = req.shop.id;
//     const newProduct = await Product.create(req.body);
//     res.status(201).json(newProduct);
//   } catch (error) {
//     next(error);
//   }
// };

exports.fetchProduct = async (productId, next) => {
  try {
    const product = await Product.findByPk(productId);
    return product;
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    await req.product.destroy();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

exports.updateProducts = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.imageUrl = `http://${req.get("host")}/media/${
        req.file.filename
      }`;
    }
    await req.product.update(req.body);
    res.json(req.product);
  } catch (err) {
    next(err);
  }
};
