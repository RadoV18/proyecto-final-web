const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    code: { type: Number, required: true, unique: true },
    name: { type: String, required: true},
    description: { type: String, required: true},
    brand: { type: String, required: true},
    availability: { type: String, default: "En Stock" },
    stock: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    categories: [
        {
            type: String
        }
    ],
    extension: { type: String, required: true }
});

productSchema.set("toJSON", {
    transform: (document, returnedProduct) => {
        returnedProduct.id = returnedProduct._id.toString();
        delete returnedProduct._id;
        delete returnedProduct.__v;
    }
});

module.exports = mongoose.model("Product", productSchema);
