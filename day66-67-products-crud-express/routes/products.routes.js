const express = require("express");
const router = express.Router();

const productsController = require("../controller/products.controller");

router.get("/", productsController.allProducts);
router.post("/", productsController.createProduct);
router.put("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteproduct);

module.exports = router;