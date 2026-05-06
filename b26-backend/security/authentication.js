const userModel = require("../model/user.model");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// registerUser
// @ POST Method
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // register logic
        const emailCheck = await userModel.findOne({ email });

        if (emailCheck) {
            return res.status(400).json({ message: "User Account Already Exists" });
        }

        // password hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create(
            { username, email, password: hashedPassword }
        );
        return res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // login logic
        const user = await userModel.findOne({email});

        if(!user){
            return res.status(404).json({message: "User Account Not Found"});
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch){
            return res.status(401).json({message: "Invalid Password"});
        }

        // token generation
        // (user details to encrypt)
        // secret key
        // expiry time
        const token = jwt.sign(
            {userId: user._id, username: user.username, email: user.email}, 
            process.env.jwt_secret,
            {expiresIn: '24h'}
        );
        return res.status(200).json({message: "Login Successful", token})

        
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(err);
    }
}

module.exports = { registerUser, loginUser };