const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

// POST
// http://localhost:8081/users/create
router.post("/create", userController.createUser);

// http://localhost:8081/users
router.get("/", userController.getallUsers);

// http://localhost:8081/users/<id>
router.get("/:id", userController.getuserbyId);

// http://localhost:8081/users/<id>
router.put("/:id", userController.updateUser);

// http://localhost:8081/users/<id>
router.delete("/:id", userController.deleteUser);
module.exports = router;