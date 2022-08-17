export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-mensaje-error").innerHTML =
            "";
        //console.log(true);
        //return true;
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-mensaje-error").innerHTML =
            mostrarMensajeError(tipoDeInput, input);
        //console.log(false);
        //return false;
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
    imagen: {
        valueMissing: "Este campo Imagen mensaje no puede estar vacio.",
    },
    urlImagen: {
        valueMissing: "Este campo url de Imagen mensaje no puede estar vacio.",
    },
    categoria: {
        valueMissing: "Este campo Categoria mensaje no puede estar vacio.",
    },
    nombreProducto: {
        valueMissing:
            "Este campo Nombre de Producto mensaje no puede estar vacio.",
    },
    precioProducto: {
        valueMissing:
            "Este campo Precio de Producto mensaje no puede estar vacio.",
    },
    descripcion: {
        valueMissing:
            "Este campo Descripcion de Producto mensaje no puede estar vacio.",
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
