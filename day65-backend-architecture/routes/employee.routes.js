const express = require("express");
const router = express.Router();
// router -> get, post, put, delete

const employeeController = require("../controllers/employee.controller");

// http://localhost:8081/employees
router.get("/employees", employeeController.allEmployee);

// http://localhost:8081/employees/new
router.post("/employees/new", employeeController.createEmployee);

module.exports = router;