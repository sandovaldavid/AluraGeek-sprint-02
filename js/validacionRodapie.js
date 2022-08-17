import { valida } from "./validaciones.js";

const nombre = document.querySelector("#nombre");
const textarea = document.querySelector("#mensaje");
textarea.addEventListener("blur", (textarea) => {
    valida(textarea.target);
});
nombre.addEventListener("blur", (input) => {
    valida(input.target);
});
