// Pom
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
};

// captura de todas as teclas exemplo: 
const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;