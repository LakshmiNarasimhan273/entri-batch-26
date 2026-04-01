// express - library installed
// import express from "express";

// backend import statement
const express = require("express"); // -> express is a library
// backend rule: 1
const app = express(); // -> convert library into instance

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})