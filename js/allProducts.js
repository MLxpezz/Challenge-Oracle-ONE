import { controller } from "./requests.js";

const btnAdd = document.querySelector(".header-btn");
const products = document.querySelector(".products");
const btnLogin = document.querySelectorAll(".loginBtn");
const addBtn = document.getElementById("addBtn");

controller.isLogin().then((login) => {
  if (login) {
    addBtn.style.display = "block";
    btnLogin.forEach((button) => {
      button.textContent = "Cerrar sesion";
      button.addEventListener("click", (e) => {
        controller.sign_Out();
      });
    });
  } else {
    addBtn.style.display = "none";
    btnLogin.forEach((button) => {
      button.textContent = "Login";
      button.addEventListener("click", (e) => {
        window.location.href = `../html/login.html`;
      });
    });
  }
});

const createItem = (data) => {
  const item = document.createElement("div");
  item.classList = "item";

  const img = document.createElement("img");
  img.classList = "img";
  img.src = data.url_img;
  item.appendChild(img);

  const name = document.createElement("p");
  name.textContent = data.nombre;
  item.appendChild(name);

  const prize = document.createElement("p");
  prize.textContent = `$${data.precio}`;
  item.appendChild(prize);

  controller.isLogin().then((login) => {
    if (login) {
      const edit = document.createElement("img");
      edit.classList = "edit";
      edit.src = "../img/edite-img.svg";
      edit.addEventListener("click", (e) => {
        window.location.href = `../html/editProduct.html?id=${data.id}`;
      });
      item.appendChild(edit);

      const deleteItem = document.createElement("img");
      deleteItem.classList = "delete";
      deleteItem.src = "../img/delete-img.svg";
      deleteItem.addEventListener("click", (e) => {
        controller.removeItem(data.id).then((res) => {
          window.location.reload();
        });
      });
      item.appendChild(deleteItem);
    }
  });

  const id = document.createElement("p");
  id.textContent = `#${data.id}`;
  item.appendChild(id);

  return item;
};

controller.dataItems().then((info) => {
  Object.keys(info).forEach((item) => {
    products.appendChild(createItem(info[item]));
  });
});

btnAdd.addEventListener("click", (e) => {
  window.location.href = "../html/addProduct.html";
});
