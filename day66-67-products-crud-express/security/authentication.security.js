const userModel = require("../models/users.model");

// register API
const registerAPI = (req, res) => {
    const { email, password } = req.body;

    // register api -> logic 1
    // checks the user given email is exists in our database
    const existsingUser = userModel.find(data => data.email === email);
    // data -> true | false
    // register api condition
    if (existsingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const newUser = {
        id: userModel.length + 1,
        email,
        password
    };
    userModel.push(newUser);
    res.status(201).json(newUser);

}

// login API
const loginAPI = (req, res) => {
    const { email, password } = req.body;

    // login api -> logic 1
    const user = userModel.find(
        data => data.email === email && data.password === password);
    // data -> true | false

    // login condition
    if (!user) {
        return res.status(401).json({message: "Invalid user credentials"})
    }

    res.status(200).json({message: "Login Successful"})
}

module.exports = { registerAPI, loginAPI }