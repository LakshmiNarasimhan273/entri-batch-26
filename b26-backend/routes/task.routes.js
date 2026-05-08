const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const taskController = require("../controller/task.controller");

router.post("/create", authMiddleware, taskController.createTask);

module.exports = router;