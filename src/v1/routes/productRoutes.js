const express = require("express");
const { getAllProducts,
    createNewProduct,
    getOneProduct,
    updateOneProduct,
    deleteOneProduct } = require("../../controllers/productController");

const router = express.Router();

router.route('/').post(createNewProduct).get(getAllProducts);
router.route('/:id').get(getOneProduct).put(updateOneProduct).delete(deleteOneProduct);

module.exports = router;