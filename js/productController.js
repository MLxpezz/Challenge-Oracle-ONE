import { controller } from "./requests.js";

const products = document.querySelector(".products");

const createItem = (data) => {
  const item = document.createElement("div");
  item.classList = "item";

  const img = document.createElement("img");
  img.classList = 'img';
  img.src = data.url_img;
  item.appendChild(img);

  const name = document.createElement("p");
  name.textContent = data.nombre;
  item.appendChild(name);

  const prize = document.createElement("p");
  prize.textContent = data.precio;
  item.appendChild(prize);

  if (window.location.pathname == "/html/products.html") {
    img.src = `.${data.url_img}`;

    const edit = document.createElement("img");
    edit.classList = "edit";
    edit.src = "../img/edite-img.svg";
    edit.addEventListener("click", (e) => {
      // Crear una URL con parámetros para la página del formulario
      const editUrl = `../html/addProduct.html?nombre=${encodeURIComponent(
        data.nombre
      )}&imagen=${encodeURIComponent(data.url_img)}&precio=${encodeURIComponent(
        data.precio
      )}&categoria=${encodeURIComponent(
        data.categoria
      )}&id=${encodeURIComponent(data.id)}`;

      // Redireccionar a la página del formulario con los parámetros
      window.location.href = editUrl;
    });
    item.appendChild(edit);

    const deteleItem = document.createElement("img");
    deteleItem.classList = "delete";
    deteleItem.src = "../img/delete-img.svg";
    deteleItem.addEventListener("click", (e) => {
      controller.deleteItem(data.id);
    });
    item.appendChild(deteleItem);

    const id = document.createElement("p");
    id.textContent = `#${data.id}`;
    item.appendChild(id);
  }

  return item;
};

controller.productController().then((res) => {
  res.forEach((star) => {
    const categoryElement = document.getElementById(star.categoria);
    if (categoryElement) {
      categoryElement.appendChild(createItem(star));
    }
    if (window.location.pathname == "/html/products.html") {
      products.appendChild(createItem(star));
    }
  });
});
