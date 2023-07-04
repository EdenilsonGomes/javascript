function tocaSom (idElementAudio) {
    
    document.querySelector(idElementAudio).play();
};

// captura de todas as teclas exemplo: 
const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;

/* //enquanto 
while (contador < listaDeTeclas.length) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
    
    //console.log(idAudio)

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    contador = contador + 1;

    //console.log(contador);
} */
//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }

    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }
}
