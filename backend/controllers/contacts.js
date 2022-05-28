const contactsRouter = require("express").Router();
const Contact = require("../models/contact");

// get contact by id
contactsRouter.get("/:id", async (req, res) => {
    const contact = await Contact
        .findById(req.params.id);

    if (!contact) {
        return res.status(404).end();
    }

    res.json(contact);
});

// delete contact by id
contactsRouter.delete("/:id", async (req, res) => {
    await Contact.findByIdAndRemove(req.params.id);
    res.status(204).end();
});

// update product by id
contactsRouter.put("/:id", async (req, res) => {
    const body = req.body;

    const contact = {
        name: body.name,
        lastName: body.lastName,
        ci: body.ci,
        email: body.email,
        phone: body.phone
    };

    Contact.findByIdAndUpdate(req.params.id, contact, { new: true })
        .then(updatedContact => {
            res.json(updatedContact);
        })
        .catch(err => res.status(500).end());
});

// get all contacts
contactsRouter.get("/", async (req, res) => {
    const contacts = await Contact.find({});
    res.json(contacts);
});

// create contact
contactsRouter.post("/", async (req, res) => {
    const contact = new Contact(req.body);
    const savedContact = await contact.save();
    res.status(201).json(savedContact.toJSON());
});

module.exports = contactsRouter;
