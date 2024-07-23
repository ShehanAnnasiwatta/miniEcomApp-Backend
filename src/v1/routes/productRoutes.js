const express = require("express");
const productController = require("../../controllers/productController");

const router = express.Router();

router.get("/", productController.getAllProducts);

router.get("/:workoutId", productController.getOneProduct);

router.post("/", productController.createNewProduct);

router.patch("/:workoutId", productController.updateOneProduct);

router.delete("/:workoutId", productController.deleteOneProduct);

module.exports = router;