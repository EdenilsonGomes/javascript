
function carregar(){
    var agora = new Date()
    var hora = agora.getHours()

    var horario = document.getElementById('horario')


    horario.innerHTML = `Agora são ${hora} horas.`



    if(hora < 12){
        document.getElementsByTagName('body')[0].style.backgroundColor = '#C9B78A'
    }else if(hora < 18){
        document.getElementsByTagName('body')[0].style.backgroundColor = '#A77864'
    }else{
        document.getElementsByTagName('body')[0].style.backgroundColor = '#4A4B4B'
    }
}

