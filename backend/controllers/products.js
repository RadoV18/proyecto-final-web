const productsRouter = require("express").Router();
const Product = require("../models/product");

const fs = require("fs");
const path = require("path");

// get image by product id
productsRouter.get("/:id/image/:ext", async (req, res) => {
    res.sendFile(path.resolve(__dirname, `../public/img/products/${req.params.id}.${req.params.ext}`));
});

productsRouter.get("/code/:code", async (req, res) => {
    const product = await Product.findOne({ code: req.params.code });

    if(!product) {
        return res.status(404).end();
    }

    res.json(product);
});

// get product by id
productsRouter.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);

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
productsRouter.put("/:id", async (req, res) => {
    const body = req.body;
    const image = req.body.image;

    let extension = image.type;
    if (image.type === "image/jpeg") {
        extension = "jpg";
    } else if (image.type === "image/png") {
        extension = "png";
    }

    const product = {
        code: body.code,
        name: body.name,
        description: body.description,
        brand: body.brand,
        availability: body.availability,
        stock: body.stock,
        price: body.price,
        categories: body.categories,
        extension,
        image: body.image,
    };

    // save image
    const file = req.params.id;

    fs.writeFile(
        `./public/img/products/${file}.${extension}`,
        image.data,
        "base64",
        (err) => {
            error = true;
        }
    );

    Product.findByIdAndUpdate(req.params.id, product, { new: true })
        .then((updatedProduct) => {
            res.json(updatedProduct);
        })
        .catch((err) => res.status(500).end());
});

// get all products
productsRouter.get("/", async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// create product
productsRouter.post("/", async (req, res) => {
    let error = false;
    try {
        // save product data
        let productData = { ...req.body };
        const image = req.body.image;
        let extension = "";
        if (image.type === "image/jpeg") {
            extension = "jpg";
        } else if (image.type === "image/png") {
            extension = "png";
        }

        productData = { ...productData, extension };
        productData = {
            ...productData,
            availability: productData.stock > 0 ? "En Stock" : "No Disponible",
        };

        const product = new Product(productData);
        const savedProduct = await product.save();

        // save image
        const file = savedProduct.id;

        fs.writeFile(
            `./public/img/products/${file}.${extension}`,
            image.data,
            "base64",
            (err) => {
                error = true;
            }
        );

        if (error) {
            res.status(500).end();
        } else {
            res.status(201).json({ savedProduct });
        }
    } catch (err) {
        console.error(err);
        res.status(400).end();
    }
});

module.exports = productsRouter;
