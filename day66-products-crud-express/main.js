const express = require("express");
const app = express();

const productsRoutes = require("./routes/products.routes");

app.use(express.json());
app.use(productsRoutes);

const port = 8081;

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});