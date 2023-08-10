import { controller } from "./requests.js";

//constante para saber si esta logeado o no
let isLogin = false;
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const btnLogin = document.querySelector('.login');

const login = () => {
};

const validarCorreo = () => {
    const email = document.querySelector('.email');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim() !== ''){
        throw new Error("Campo email vacio");
    }
    if(!emailRegex.test(email.value)) {
        throw new Error('El formato del correo no es el correcto.');
    }


}

btnLogin.addEventListener('click', e => {
    e.preventDefault();
    controller.login(email.value, password.value).then((userCredential) => {
        const user = userCredential.user;
        window.location.href = '../html/products.html';
    }).catch(error => console.log(error));
});

