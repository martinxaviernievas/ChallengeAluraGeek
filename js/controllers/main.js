import { servicesProducts } from "../services/product-services.js";

const productContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");

function createCard(name, price, image, id) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="img-container">
            <img src="${image}" alt="${name}">
        </div>
        <div class="card-container--info">
            <p>${name}</p>
            <div class="card-container--value">
                <p>$${price}</p>
                <button class="delete-button" data-id="${id}">
                    <img src="img/🦆 icon _trash 2_.png" alt="eliminar">
                </button>
            </div>
        </div>
    `;

    const deleteButton = card.querySelector(".delete-button");
    deleteButton.addEventListener("click", async () => {
        try {
            console.log(`Eliminando producto con id ${id}`);
            await servicesProducts.deleteProduct(id);
            console.log(`Producto con id ${id} eliminado.`);
            card.remove(); // Remove the card from the DOM
        } catch (error) {
            console.log(`Error al eliminar el producto con id ${id}:`, error);
        }
    });

    productContainer.appendChild(card);
    return card;
}

const render = async () => {
    try {
        const listProducts = await servicesProducts.productList();
        console.log("Productos cargados:", listProducts);
        listProducts.forEach(product => {
            productContainer.appendChild(
                createCard(
                    product.name,
                    product.price,
                    product.image,
                    product.id
                )
            );
        });
    } catch (error) {
        console.log(error);
    }
};

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    try {
        const listProducts = await servicesProducts.productList();
        const highestId = listProducts.reduce((max, product) => Math.max(max, product.id), 0);
        const newId = highestId + 1;

        await servicesProducts.createProducts(name, price, image, newId);
        console.log(`Producto con id ${newId} creado.`);
        createCard(name, price, image, newId);  // Update the UI immediately
    } catch (error) {
        console.log(`Error al crear el producto con id ${newId}:`, error);
    }
});

render();

