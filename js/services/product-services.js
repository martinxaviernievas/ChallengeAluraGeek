const productList = () => {
    return fetch("https://fake-api-amber.vercel.app/products")
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const createProducts = (name, price, image, id) => {
    return fetch("https://fake-api-amber.vercel.app/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            image,
            id: `${id}`,
        }),
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error('Error al crear el producto');
        }
        return res.json();
    })
    .catch((err) => console.log(err));
};

const deleteProduct = (id) => {
    return fetch(`https://fake-api-amber.vercel.app/products${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    }).then((res) => {
        if (!res.ok) {
            throw new Error('Error al eliminar el producto');
        }
    }).catch((err) => console.log(err));
};

export const servicesProducts = {
    productList,
    createProducts,
    deleteProduct,
};
