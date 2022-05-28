const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    ci: Number,
    email: String,
    phone: Number
});

contactsSchema.set("toJSON", {
    transform: (document, returnedContact) => {
        returnedContact.id = returnedContact._id.toString();
        delete returnedContact._id;
        delete returnedContact.__v;
    }
});

module.exports = mongoose.model('Contact', contactsSchema);
