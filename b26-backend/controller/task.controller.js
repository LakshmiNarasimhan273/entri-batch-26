const taskModel = require("../model/task.model");

// POST - Create Task
const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;

        const task = await taskModel.create({
            title, description, status, user: req.user
        });

        res.status(201).json(task);

    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// GET - Get own Tasks

module.exports = { createTask };