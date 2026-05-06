const taskModel = require("../model/task.model");

// POST API
const createTask = async (req, res) => {
    const{title, description, status} = req.body;

    try{
        if(!title || !description || !status){
            return res.status(400).json({message: "All fields are required"});
        }
        const task = await taskModel.create({title, description, status, userId: req.user});
        return res.status(201).json(task);
    }catch(err){
        return res.status(500).json({message: "Internal Server Error"});
    }
}