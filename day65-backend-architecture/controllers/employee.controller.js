// API LOGIC
const employeeModel = require("../models/employee.model");

// GET ALL API

// app.get("/employees", allEmployee)

const allEmployee = (req, res) => {
    res.status(200).json(employeeModel);
};

// CREATE
const createEmployee = (req, res) => {
    const {name, email, role} = req.body;

    const newEmployee = {
        id: Date.now().toString(),
        name,
        email,
        role
    };

    employeeModel.push(newEmployee);
    res.status(201).json(newEmployee);
}

module.exports = { allEmployee, createEmployee };