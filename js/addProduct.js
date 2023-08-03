import { controller } from "./requests.js";

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const prizeInput = document.getElementById("prize");
const categoryInput = document.getElementById("category");
const addProduct = document.querySelector(".addProduct");


addProduct.addEventListener("click", (e) => {
  e.preventDefault();

  controller.addItem(urlInput.value, nameInput.value, categoryInput.value, prizeInput.value).then(res => {
    window.location.href = "../html/products.html";
  });

});

