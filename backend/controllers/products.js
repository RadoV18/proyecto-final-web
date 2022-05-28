const productsRouter = require("express").Router();
const Product = require("../models/product");

// get product by id
productsRouter.get("/:id", async (req, res) => {
    const product = await Product
        .findById(req.params.id);
    
    if (!product) {
        return res.status(404).end();
    }

    res.json(product);
});

// delete product by id
productsRouter.delete("/:id", async (req, res) => {
    await Product.findByIdAndRemove(req.params.id);
    res.status(204).end();
});

// update product by id
productsRouter.put("/:id", async ( req, res ) => {
    const body = req.body;

    const product = {
        name: body.name,
        description: body.description,
        brand: body.brand,
        availability: body.availability,
        stock: body.stock,
        price: body.price,
        categories: body.categories
    };

    Product.findByIdAndUpdate(req.params.id, product, { new: true })
        .then(updatedProduct => {
            res.json(updatedProduct);
        })
        .catch(err => res.status(500).end());
});

// get all products
productsRouter.get("/", async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// create product
productsRouter.post("/", async (req, res) => {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
});

module.exports = productsRouter;
