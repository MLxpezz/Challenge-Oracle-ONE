import { controller } from "./requests.js";

const createItem = (data) => {
  const item = document.createElement("div");
  item.classList = "item";

  const img = document.createElement("img");
  img.classList = 'img';
  img.src = `${data.url_img}`;
  item.appendChild(img);

  const name = document.createElement("p");
  name.textContent = data.nombre;
  item.appendChild(name);

  const prize = document.createElement("p");
  prize.textContent = data.precio;
  item.appendChild(prize);

  return item;
};

controller.dataItems().then(info => {
  Object.keys(info).forEach(item => {
    const categoryElement = document.getElementById(info[item].categoria);
    if(categoryElement) {
      categoryElement.appendChild(createItem(info[item]));
    }
  });
});