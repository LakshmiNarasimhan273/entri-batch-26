const express = require("express");
const router = express.Router();

const authentication = require("../security/authentication");

// http://localhost:8081/auth/register
router.post("/register", authentication.registerUser);

// http://localhost:8081/auth/login
router.post("/login", authentication.loginUser);
module.exports = router;