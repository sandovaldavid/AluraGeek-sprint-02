import { usuario } from "./usuarios.js";
const btn_login = document.querySelector("[data-login]");
btn_login.addEventListener("click", (event) => {
    event.preventDefault();
    const emailUsuario = document.querySelector("#login__email").value;
    const passwordUsuario = document.querySelector("#login__clave").value;
    console.log(emailUsuario, passwordUsuario);
    validaUsuario(emailUsuario, passwordUsuario);
});

const validaUsuario = (email, password) => {
    console.log(email, password);
    if (email == usuario.email && password == usuario.password) {
        id = 001111;
        window.location.href = `/productos_usuario.html?id=${id}`;
    } else {
        alert("passwod erronea");
    }
};
