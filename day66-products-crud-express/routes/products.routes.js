const express = require("express");
const router = express.Router();

const productsController = require("../controller/products.controller");

router.get("/products", productsController.allProducts);
router.post("/products", productsController.createProduct);
router.put("/products/:id", productsController.updateProduct);
router.delete("/products/:id", productsController.deleteproduct);

module.exports = router;