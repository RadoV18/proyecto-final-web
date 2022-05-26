const productsRouter = require("express").Router();
const Product = require("../models/product");

productsRouter.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (err) {
        res.status(404).end();
    }
});

productsRouter.delete("/:id", async (req, res) => {
    try {
        await Product.deleteOne({
            _id: req.params.id
        });
        res.status(204).end();
    } catch (err) {
        res.status(204).end();
    }
});

productsRouter.put("/", async ( req, res ) => {
    
});

productsRouter.get("/", async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

productsRouter.post("/", async (req, res) => {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
});

module.exports = productsRouter;
