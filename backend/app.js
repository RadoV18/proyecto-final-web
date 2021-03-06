// imports
const config = require('./utils/config');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

// import controllers
const productsController = require("./controllers/products");
const contactsController = require("./controllers/contacts");
const salesController = require("./controllers/sales");
const usersController = require("./controllers/users");
const authController = require("./controllers/auth");

// middleware
const { tokenExtractor, userExtractor } = require("./utils/authMiddleware");

// mongoose
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => console.error(`error connecting to MongoDB: ${err.message}`));

// app
const app = express();
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

// public endpoints
app.use("/api/auth", authController);
app.use("/api/users", usersController);

// authentication middleware
// app.use(tokenExtractor);
// app.use(userExtractor);

// protected endpoints
app.use("/api/products", productsController);
app.use("/api/contacts", contactsController);
app.use("/api/sales", salesController);

module.exports = app;
