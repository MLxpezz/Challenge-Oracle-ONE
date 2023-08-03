import { controller } from "./requests.js";

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const prizeInput = document.getElementById("prize");
const categoryInput = document.getElementById("category");
const addProduct = document.querySelector(".addProduct");

const urlParams = new URLSearchParams(window.location.search);

const nombre = urlParams.get("nombre");
const urlImg = urlParams.get("imagen");
const precio = urlParams.get("precio");
const categoria = urlParams.get("categoria");
const id = urlParams.get("id");

nameInput.value = nombre;
urlInput.value = urlImg;
prizeInput.value = precio;
categoryInput.value = categoria;

addProduct.addEventListener("click", (e) => {
  e.preventDefault();

  if (window.location.pathname != "/html/addProduct.html") {
    controller.updateItem(
      urlInput.value,
      nameInput.value,
      categoryInput.value,
      prizeInput.value,
      id
    ).then(res => {
        window.location.href = "../html/products.html";
    });
    
  }

  controller.addItem(urlInput.value, nameInput.value, categoryInput.value, prizeInput.value).then(res => {
    window.location.href = "../html/products.html";
  });

});
