const express = require("express");
const {
  getAllProducts,
  createProduct,
  updatedProduct,
  deleteProduct,
  getProductById,
} = require("../controller/productController");

const productRouter = express.Router();

productRouter.get("/", getAllProducts);

productRouter.post("/", createProduct);

productRouter.put("/:id", updatedProduct);

productRouter.delete("/:id", deleteProduct);

productRouter.get("/:id", getProductById);

module.exports = { productRouter };
