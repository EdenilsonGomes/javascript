
function carregar(){
    var horario = document.getElementById('horario')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()

    horario.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        document.getElementsByTagName('body')[0].style.backgroundColor = '#C9B78A'
        img.src = 'fotomanha.png'

    }else if(hora >= 12 && hora <= 18){
        document.getElementsByTagName('body')[0].style.backgroundColor = '#A77864'
        img.src = 'fototarde.png'
    }else{
        document.getElementsByTagName('body')[0].style.backgroundColor = '#4A4B4B'
        img.src = 'fotonoite.png'
    }
}
