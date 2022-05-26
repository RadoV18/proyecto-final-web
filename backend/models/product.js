const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    brand: String,
    availability: String,
    stock: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    categories: [
        {
            type: String
        }
    ]
});

productSchema.set("toJSON", {
    transform: (document, returnedProduct) => {
        returnedProduct.id = returnedProduct._id.toString();
        delete returnedProduct._id;
        delete returnedProduct.__v;
    }
});

module.exports = mongoose.model("Product", productSchema);
