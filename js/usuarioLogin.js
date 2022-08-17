import { valida } from "./validaciones.js";
import { siguientePagina } from "./linksPaginas.js";

const btn_login = document.querySelector("[data-login]");
const email = document.querySelector("#login__email");
const password = document.querySelector("#login__clave");

email.addEventListener("blur", (input) => {
    valida(input.target);
});
password.addEventListener("blur", (input) => {
    valida(input.target);
});
const usuario = {
    email: "david@alura.com",
    password: "12345",
};

const estadoEmailUsuario = false;
const emailUsuario = email.value;
const passwordUsuario = password.value;
/*
emailUsuario.addEventListener("blur", (input) => {
    estadoEmailUsuario = valida(input.target);
});
*/
btn_login.addEventListener("click", (event) => {
    event.preventDefault();
    const emailUsuario = document.querySelector("#login__email").value;
    const passwordUsuario = document.querySelector("#login__clave").value;
    validaUsuario(emailUsuario, passwordUsuario);
});

const validaUsuario = (email, password) => {
    console.log(email, password);
    if (email == usuario.email && password == usuario.password) {
        window.location.href = "/productos_usuario.html";
    } else {
        alert("passwod erronea");
    }
};
