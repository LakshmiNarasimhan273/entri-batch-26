const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require("./config/dbConnection");
const userRoutes = require("./routes/user.routes");

app.use(express.json());
app.use("/users", userRoutes);

dbConnection();
app.listen(process.env.port, () => {
    console.log(`Server up and running ${process.env.port}`)
});