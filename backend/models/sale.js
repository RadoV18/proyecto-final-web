const mongoose = require("mongoose");
const { Schema } = mongoose;

const salesSchema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    contactId: {
        type: Schema.Types.ObjectId,
        ref: 'Contact'
    },
    products: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                default: 0
            }
        }
    ]
});

salesSchema.set("toJSON", {
    transform: (document, returnedSale) => {
        returnedSale.id = returnedSale._id.toString();
        delete returnedSale._id;
        delete returnedSale.__v;
    }
});

module.exports = mongoose.model("Sale", salesSchema);
