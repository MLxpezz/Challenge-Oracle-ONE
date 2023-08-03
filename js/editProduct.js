import { controller } from "./requests.js";

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const prizeInput = document.getElementById("prize");
const categoryInput = document.getElementById("category");
const editProduct = document.querySelector(".editProduct");

(() => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  controller.itemDetail(id).then((res) => {
    nameInput.value = res.nombre;
    urlInput.value = res.url_img;
    prizeInput.value = res.precio;
    categoryInput.value = res.categoria;
  });
})();

editProduct.addEventListener("click", (e) => {
  e.preventDefault();

  controller
    .updateItem(
      urlInput.value,
      nameInput.value,
      categoryInput.value,
      prizeInput.value,
      id
    )
    .then((res) => {
      window.location.href = "../html/products.html";
    });
});
