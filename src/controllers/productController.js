const Product = require('../model/Product')
const asyncHandler = require('async-handler')

const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();

    res.status(200).json(products);
});

const getOneProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(401);
        throw new Error("Product not available!");
    }

    res.status(200).json(product);
})

const createNewProduct = asyncHandler(async (req, res) => {
    const { SKU, quantity, productName, productDescription } = req.body;

    if (!SKU || !quantity || !productName || !productDescription) {
        res.status(400);
        throw new Error("Please input all feilds");
    }

    const product = await Product.create({
        SKU,
        quantity,
        productName,
        productDescription
        //user : req.user.id      
    });

    if (product) {
        res.status(201).json({
            SKU: product.SKU,
            quantity: product.quantity,
            productName: product.productName,
            productDescription: product.productDescription
        }
        )
    } else {
        res.status(400)
        throw new Error("Prodcut creation unsucessful!")
    }
})

const updateOneProduct = asyncHandler(async (req, res) => {

    const product = await Product.findById({ _id: req.params.id });

    if (!product) {
        res.status(400);
        throw new Error('Product not found')
    } 

    const updatedProduct = await Product.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
    })

    res.status(200).json(updatedProduct);
})

const deleteOneProduct = asyncHandler(async (req, res) => {

    const product = await Product.findById({ _id: req.params.id });

    if (!product) {
        res.status(400);
        throw new Error('Product not found')
    } 

    await Product.deleteOne()

    res.status(200).json({ _id: req.params.id });
})

module.exports = {
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateOneProduct,
    deleteOneProduct,
};