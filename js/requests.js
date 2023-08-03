


const productController = async () => {
    const res = await fetch(`http://localhost:3000/productos`);
    return await res.json();
};

const loginController = async () => {
    const res = await fetch(`http://localhost:3000/perfil`);
    return await res.json();
};

const deleteItem = async (id) => {
    return await fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE"
    });
};

const updateItem = async (url_img ,nombre, categoria, precio, id) => {
    const res = await fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ url_img ,nombre, categoria, precio}),
    });

    return res;
};

const addItem = async (url_img, nombre, categoria, precio) => {
    return fetch(`http://localhost:3000/productos/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({url_img, nombre, categoria, precio, id: uuid.v4()}),
    });
};

export const controller = {
    productController,
    loginController,
    deleteItem,
    updateItem,
    addItem
};