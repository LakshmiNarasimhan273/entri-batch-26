const express = require("express");
const app = express();

const productsRoutes = require("./routes/products.routes");
const authRoutes = require("./routes/authentication.routes");

app.use(express.json());

app.use("/products", productsRoutes);
app.use("/users", authRoutes);

const port = 8081;

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});