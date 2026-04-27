const userModel = require("../model/user.model");

// 1 POST API
const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            // 400 - Bad Request
            return res.status(400).json({ message: "All the fields are required" });
        }   
        const user = await userModel.create({ username, email, password });
        // 201 - Created
        return res.status(201).json(user);
    } catch (err) {
        // 500 - Internal Server Error
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

// 2 GET ALL
const getallUsers = async (req, res) => {
    try {
        const users = await userModel.find().select("-password");

        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

// 3 GET BY ID
const getuserbyId = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
// 4 UPDATE
const updateUser = async (req, res) => {
    try {
        // update logic
        const user = await userModel.findByIdAndUpdate(
            req.params.id, req.body, { new: true }).select("-password")

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
// 5 DELETE
const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "User account deleted" });
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { createUser, getallUsers, getuserbyId, updateUser, deleteUser };