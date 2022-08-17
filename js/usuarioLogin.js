const btn_login = document.querySelector("[data-login]");

const usuario = {
    email: "david@alura.com",
    password: "12345",
};

const estadoEmailUsuario = false;
const emailUsuario = document.querySelector("#login__email").value;
const passwordUsuario = document.querySelector("#login__clave").value;
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
