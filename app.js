const express = require("express");
const db = require("./db/models");
const app = express();
const productsRouter = require("./routes/products");
app.use(express.json());
app.use("/products", productsRouter);
db.sequelize.sync({ alter: true });
app.listen(8000);
