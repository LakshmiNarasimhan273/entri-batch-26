const express = require("express");
const app = express();

const employeeRoutes = require("./routes/employee.routes");

app.use(express.json());

app.use(employeeRoutes);

const port = 8081;

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});