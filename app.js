const express = require("express");
const app = express();
const productsRouter = require("./routes/products");
app.use(express.json());
app.use("/products", productsRouter);

app.listen(8000);
