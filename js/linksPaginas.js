export const navegarEnLaPagina = (btn_id, id) => {
    const btn = document.querySelector(btn_id);
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "#" + id;
    });
};

export const siguientePagina = (id_btn, nombrePagina) => {
    const btn = document.querySelector(id_btn);
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("siguiente pagina");
        window.location.href = "/" + nombrePagina;
        console.log("siguiente pagina");
    });
};
