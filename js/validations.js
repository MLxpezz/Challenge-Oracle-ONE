export const validaFalla = (input, msg) => {
  const formControl = input.parentElement;
  const aviso = formControl.querySelector(".input-message-error");
  aviso.innerText = msg;

  formControl.classList.add("falla");
};

export const validaOk = (input) => {
  const formControl = input.parentElement;
  const aviso = formControl.querySelector(".input-message-error");
  aviso.innerText = "";
  formControl.classList.remove("falla");
};

export const validarEmail = (email) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
};

const validarNumero = (inputPrize) => {
  return /^[0-9]+$/.test(inputPrize);
};

export const validaciones = (inputName, inputUrl, inputPrize) => {
  const nameItem = inputName.value;
  const urlItem = inputUrl.value;
  const prizeItem = inputPrize.value;
  let campoCompleto = true;

  if (!urlItem) {
    validaFalla(inputUrl, "El campo no puede estar vacio");
    campoCompleto = false;
  } else {
    validaOk(inputUrl);
  }

  if (!nameItem) {
    validaFalla(inputName, "El campo no puede estar vacio");
    campoCompleto = false;
  } else {
    validaOk(inputName);
  }

  if (!prizeItem) {
    validaFalla(inputPrize, "El campo no puede estar vacio");
    campoCompleto = false;
  } else if (!validarNumero(prizeItem)) {
    validaFalla(inputPrize, "Solo se aceptan numeros en el campo precio");
    campoCompleto = false;
  } else {
    validaOk(inputPrize);
  }

  return campoCompleto;
};
