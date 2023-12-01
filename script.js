let jsScripts = {

    loadPage: async function () {
        jsScripts.criarEventos();
    },

    criarEventos: async function () {
        let formulario = document.querySelector(".fale-conosco");
        let mascara = document.querySelector(".mascara-form");

        document.getElementById('fale-conosco').addEventListener('click', function () {
            formulario.style.left = "700px";
            mascara.style.visibility = "visible";
        });

        document.getElementById('enviar-formulario').addEventListener('click', function () {
            formulario.style.left = "-320px"
            mascara.style.visibility = "hidden"
        });

    },
}

window.onload = function () {
    jsScripts.loadPage();

};

