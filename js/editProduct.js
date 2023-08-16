import { controller } from "./requests.js";
import { validaciones } from "./validations.js";

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const prizeInput = document.getElementById("prize");
const categoryInput = document.getElementById("category");
const editProduct = document.querySelector(".editProduct");

(() => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  console.log(id);

  controller.detailItem(id).then((res) => {
    nameInput.value = res.nombre;
    urlInput.value = res.url_img;
    prizeInput.value = res.precio;

    for (let i = 0; i < categoryInput.options.length; i++) {
      if (categoryInput.options[i].innerHTML == res.categoria) {
        categoryInput.options[i].selected = true;
      }
    }
  });
})();

editProduct.addEventListener("click", (e) => {
  e.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  if (validaciones(nameInput, urlInput, prizeInput)) {
    controller
      .updateItem(
        urlInput.value,
        nameInput.value,
        categoryInput.options[categoryInput.selectedIndex].textContent,
        prizeInput.value,
        id
      )
      .then((res) => {
        window.location.href = "../html/products.html";
      });
  }
});
