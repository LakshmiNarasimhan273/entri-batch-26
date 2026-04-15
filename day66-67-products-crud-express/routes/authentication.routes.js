const express = require("express");
const router = express.Router();

const authentication = require("../security/authentication.security");

// register -> 
router.post("/register", authentication.registerAPI);

router.post("/login", authentication.loginAPI);

module.exports = router;