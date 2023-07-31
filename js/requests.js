const productController = async () => {
    const res = await fetch(`http://localhost:3000/productos`);
    return await res.json();
};

const loginController = async () => {
    const res = await fetch(`http://localhost:3000/perfil`);
    return await res.json();
}

export const controller = {
    productController,
    loginController
};