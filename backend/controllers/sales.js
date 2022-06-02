const salesRouter = require("express").Router();
const Sale = require("../models/sale");

// get all sales
salesRouter.get("/", async (req, res) => {
    const sales = await Sale.find({})
        .populate("contactId");
    res.json(sales);
});

// get sale by id
salesRouter.get("/:id", async (req, res) => {
    const sale = await Sale
        .findById(req.params.id)
        .populate("contactId")
        .populate("products.productId");

    if (!sale) {
        res.status(404);
    }

    res.json(sale);
});

salesRouter.get("/products/:id", async (req, res) => {
    const sale = await Sale
        .findById(req.params.id)
        .populate("contactId")
        .populate("products.productId");

    if(!sale){
        res.status(404);
    }

    res.json(sale.products);
});

// create new sale
salesRouter.post("/", async (req, res) => {
    const sale = new Sale(req.body);
    const savedContact = await sale.save();
    res.status(201).json(savedContact);
});

// delete sale by id
salesRouter.delete("/:id", async (req, res) => {
    await Sale.findByIdAndRemove(req.params.id);
    res.status(204).end();
});

// update sale by id
salesRouter.put("/:id", async (req, res) => {
    const data = req.body;
    const updated = await Sale.findByIdAndUpdate(req.params.id, data, { new: true });
    if(!updated) {
        return res.status(404).end();
    }
    res.json(updated);
});

module.exports = salesRouter;
