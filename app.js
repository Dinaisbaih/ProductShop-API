const express = require("express");
const db = require("./db/models");
const app = express();
const productsRouter = require("./routes/products");

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

app.use(express.json());
app.use("/products", productsRouter);
db.sequelize.sync({ alter: true });
app.listen(8000);
