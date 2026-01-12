const productContainer = document.getElementById("product-container");
const loader = document.getElementById("loader");


async function getProducts() {
    try {

        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Data Fetching Failed");
        }

        const products = await response.json();

        productContainer.innerHTML = "";

        products.forEach(data => {
            const card =
                `
            <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="card h-100 shadow-sm">
                    <img src="${data.image}" class="card-img-top" />
                    <div class="card-body d-flex flex-column">
                        <p class="text-muted small mb-1">${data.category}</p>
                        <h6 class="card-title text-dark fw-bold text-truncate">${data.title}</h6>
                        <p class="card-text text-primary fs-5 fw-bold mt-auto">${data.price}</p>
                        <div class="d-grid">
                        <button class="btn btn-outline-info btn-sm">More Details</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            productContainer.innerHTML += card;
        });

    } catch (err) {
        console.error(err);
    }
}

getProducts();