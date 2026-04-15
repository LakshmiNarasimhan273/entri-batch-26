const productsModel = require("../models/products.model");

// GET ALL API
const allProducts = (req, res) => {
    res.status(200).json(productsModel);
}

// POST API
const createProduct = (req, res) => {
    const { name, price, category } = req.body;

    const newProduct = {
        id: productsModel.length + 1,
        name,
        price,
        category
    };
    productsModel.push(newProduct);
    res.status(201).json(newProduct);
}

// Edit Products
const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const{name, price, category} = req.body;

    const product = productsModel.find(data => data.id === id);
     console.log(product);

    if(!product){
        return res.status(404).json({message: "Product not found"});
    }

    // Update logic
    product.name = name || product.name;
    product.price = price || product.price;
    product.category = category || product.category;

    res.status(200).json(product);

}

// Delete Product
const deleteproduct = (req, res) => {
    const id = parseInt(req.params.id);

    const product = productsModel.findIndex(data => data.id === id);
   

    if(product === -1){
        return res.status(404).json({message: "Product not found"});
    }

    const deletedProduct = productsModel.splice(product, 1);
    console.log(deletedProduct)

    res.status(200).json({message: "Product deleted"});
}

module.exports = { allProducts, createProduct, updateProduct, deleteproduct };