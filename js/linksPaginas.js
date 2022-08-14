const btn_verConsolas = document.querySelector("#botonVerConsolas");

const navegarEnLaPagina = (btn_id, id) => {
    const btn = document.querySelector(btn_id);
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "#" + id;
    });
};

navegarEnLaPagina("#botonVerConsolas", "consolas");
