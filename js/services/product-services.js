const productList = async () => {
    try {
        const res = await fetch("https://fake-api-amber.vercel.app/products");
        if (!res.ok) {
            throw new Error('Error al obtener la lista de productos');
        }
        return await res.json();
    } catch (err) {
        console.error(err);
    }
};

const createProducts = async (name, price, image, id) => {
    try {
        const res = await fetch("https://fake-api-amber.vercel.app/products", {
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
        });
        if (!res.ok) {
            throw new Error('Error al crear el producto');
        }
        return await res.json();
    } catch (err) {
        console.error(err);
    }
};

const deleteProduct = async (id) => {
    try {
        const res = await fetch(`https://fake-api-amber.vercel.app/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!res.ok) {
            throw new Error('Error al eliminar el producto');
        }
    } catch (err) {
        console.error(err);
    }
};

export const servicesProducts = {
    productList,
    createProducts,
    deleteProduct,
};