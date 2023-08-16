import { controller } from "./requests.js";
import { validaciones } from "./validations.js";

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const prizeInput = document.getElementById("prize");
const categoryInput = document.getElementById("category");
const addProduct = document.querySelector(".addProduct");

addProduct.addEventListener("click", (e) => {
  e.preventDefault();
  if (validaciones(nameInput, urlInput, prizeInput)) {
    controller
      .addItem(
        urlInput.value,
        nameInput.value,
        categoryInput.options[categoryInput.selectedIndex].textContent,
        prizeInput.value
      )
      .then((res) => (window.location.href = "../html/products.html"));
  }
});