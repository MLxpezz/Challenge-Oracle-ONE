import { controller } from "./requests.js";
import { validaFalla, validaOk, validarEmail } from "./validations.js";

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btnLogin = document.querySelector(".login");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (validarCampos()) {
    controller
      .login(email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        window.location.href = "../html/products.html";
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

const validarCampos = () => {
  const emailValor = email.value;
  const passValor = password.value;
  let camposValidos = true;

  if (!emailValor) {
    validaFalla(email, "El campo no puede estar vacio");
    camposValidos = false;
  } else if (!validarEmail(emailValor)) {
    validaFalla(email, "Formato de email invalido");
    camposValidos = false;
  } else {
    validaOk(email);
  }

  if (!passValor) {
    validaFalla(password, "El campo no puede estar vacio");
    camposValidos = false;
  } else {
    validaOk(password);
  }

  return camposValidos;
};
