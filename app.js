const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Avaleht");
});

app.get("/products", (request, response) => {
    const { products } = require("./data");
    const { search, limit } = request.query;

    let sortedProducts = [...products];

    if (search)
        sortedProducts = sortedProducts.filter((product) =>
            product.title.includes(search)
        );
    if (limit) sortedProducts = sortedProducts.slice(0, Number(limit));

    response.status(200).json({
        products: sortedProducts,
        user: { id: 1, name: "Gen Vikat", email: "vikat.gen@gmail.com" },
    });
});

app.get("/products/:productID", (request, response) => {
    const { productID } = request.params;
    const { products } = require("./data");

    const product = products.find((item) => item.id === Number(productID));

    if (!product) response.status(404).json({ message: "Product not found" });

    response.status(200).json(product);
});

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is listening on port ${process.env.PORT || 8000}`);
});
