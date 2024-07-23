const getAllProducts = (req, res) => {
    res.send("Get all products");
  };
  
  const getOneProduct = (req, res) => {
    res.send("Get an existing product");
  };
  
  const createNewProduct = (req, res) => {
    res.send("Create a new product");
  };
  
  const updateOneProduct = (req, res) => {
    res.send("Update an existing product");
  };
  
  const deleteOneProduct = (req, res) => {
    res.send("Delete an existing product");
  };
  
  module.exports = {
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateOneProduct,
    deleteOneProduct,
  };