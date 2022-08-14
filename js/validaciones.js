export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-mensaje-error").innerHTML =
            "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-mensaje-error").innerHTML =
            mostrarMensajeError(tipoDeInput, input);
    }
}

const tipoDeErrores = ["valueMissing", "typeMismatch", "patternMismatch"];

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo nombre no puede estar vacio.",
    },
    email: {
        valueMissing: "Este campo email no puede estar vacio.",
        typeMismatch: "El correo no es valido",
    },
    password: {
        valueMissing: "Este campo password no puede estar vacio.",
        patternMismatch:
            "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    },
    mensaje: {
        valueMissing: "Este campo mensaje no puede estar vacio.",
    },
};

function mostrarMensajeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}
