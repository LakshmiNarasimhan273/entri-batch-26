const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const taskController = require("../controller/task.controller");

router.post("/create", authMiddleware, taskController.createTask);
router.get("/", authMiddleware, taskController.getUserTasks);
router.put("/:id", authMiddleware, taskController.updateTask);
router.delete("/:id", authMiddleware, taskController.deleteTask);

module.exports = router;