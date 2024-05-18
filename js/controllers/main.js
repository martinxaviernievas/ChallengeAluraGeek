const productContainer = document.querySelector("[data-product]");

function createCard (name, price,image,id) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="img-container">
            <img src="${image}" alt="${name}">
        </div>

        <div class="card-container--info">
            <p>${name}</p>
            <div class="card-container--value">
                <p>${price}</p>
                <button class="delete-button" data-id="${id}" >
                    <img src="#" alt="eliminar">
                </button>
            </div>
        </div>
    `;

    productContainer.appendChild(card);
    return card;

}