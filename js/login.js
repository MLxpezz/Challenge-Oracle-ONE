import { controller } from "./requests.js";

//constante para saber si esta logeado o no
const isLogin = false;
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
    controller.dataUser().then(res => {
        res.forEach(data => {
            console.log(data.email, data.password);
            console.log(email.value, password.value);
            if(email.value === data.email && password.value === data.password) {
                console.log('Inicio de sesion correcto');
                window.location.href = '../html/products.html';
            }else {
                console.log('No existe esa cuenta');
            }
        })
    });
})