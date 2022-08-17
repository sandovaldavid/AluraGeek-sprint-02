import { valida } from "./validaciones.js";
const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("#mensaje");
const descripcion = document.querySelector("#descripcion");

textarea.addEventListener("blur", (textarea) => {
    valida(textarea.target);
});
descripcion.addEventListener("blur", (textarea) => {
    valida(textarea.target);
});
inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});
