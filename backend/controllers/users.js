const usersRouter = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

usersRouter.get("/", async (req, res) => {
    res.json(await User.find({}));
});

usersRouter.post("/", async (req, res) => {
    const data = req.body;

    const salt = 10;
    const passwordHash = await bcrypt.hash(data.password, salt);

    const newUser = new User({
        username: data.username,
        name: data.name,
        passwordHash
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
});

module.exports = usersRouter;
