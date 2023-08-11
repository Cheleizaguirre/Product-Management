const productForm = document.getElementById("product-form");
const responseMessage = document.getElementById("response-message");
const productList = document.getElementById("product-list");

productForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;
    const category = document.getElementById("category").value;

    const productData = {
        title,
        price,
        description,
        image,
        category,
    };

    try {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        });

        const responseData = await response.json();
        responseMessage.textContent = "Producto agregado exitosamente.";

        
        productForm.reset();

        allProducts.push(responseData);

        
        fetchProducts();
    } catch (error) {
        responseMessage.textContent = "Error al agregar el producto.";
    }
});


let allProducts = [];

async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const productsFromAPI = await response.json();

        allProducts = [...allProducts, ...productsFromAPI];

        productList.innerHTML = ""; 

        allProducts.forEach((product) => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>Precio: $${product.price}</p>
                <p>Categoría: ${product.category}</p>
                <p>${product.description}</p>
            `;
            productList.appendChild(productElement);
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}


fetchProducts(); 