import { controller } from "./requests.js";

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

  if(window.location.pathname === '/html/products.html') {
    const edit = document.createElement('img');
    edit.classList = 'edit';
    edit.src = '../img/edite-img.svg';
    edit.addEventListener('click', e => {window.location.href = `/html/editProduct.html?id=${data.id}`});
    item.appendChild(edit);

    const deleteItem = document.createElement('img');
    deleteItem.classList = 'delete';
    deleteItem.src = '../img/delete-img.svg';
    deleteItem.addEventListener('click', e => {controller.deleteItem(data.id)});
    item.appendChild(deleteItem);

    const id = document.createElement("p");
    id.textContent = `#${data.id}`;
    item.appendChild(id);
  }

  return item;
};

controller.productController().then((res) => {
  res.forEach((star) => {
    const categoryElement = document.getElementById(star.categoria);
    const products = document.querySelector('.products');
    if (categoryElement) {
      categoryElement.appendChild(createItem(star));
    }
    if(window.location.pathname === '/html/products.html') {
      products.appendChild(createItem(star));
    }
  });
});

