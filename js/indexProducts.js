import { controller } from "./requests.js";

const seeItems = document.querySelectorAll('.seeItems');
const btnLogin = document.getElementById('login');

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

controller.isLogin().then(login => {
  if(login) {
    btnLogin.textContent = 'Cerrar sesion';
    btnLogin.addEventListener('click', e => {
      controller.sign_Out();
    })
  } else{
    btnLogin.textContent = 'Login';
    btnLogin.addEventListener('click', e => {
      window.location.href = `${window.location.origin}/html/login.html`;
    });
  }
})

seeItems.forEach(button => button.addEventListener('click', e => {window.location.href = `${window.location.origin}/html/products.html`}));