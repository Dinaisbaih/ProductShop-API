let products = require("../data");
var slugify = require("slugify");

exports.createProduct = (req, res) => {
  req.body.id = products[products.length - 1].id + 1;
  req.body.slug = slugify(req.body.name.toLowerCase());
  const newProduct = req.body;

  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.deleteProduct = (req, res) => {
  const productId = req.params.productId;
  const foundProduct = products.find((product) => product.id === +productId);

  if (foundProduct) {
    products = products.filter((product) => product.id !== +productId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Product with this ID doesn't exist" });
  }
};

exports.getProducts = (req, res) => {
  res.json(products);
};
