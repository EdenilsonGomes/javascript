function verificar(){
//verificacao idade
var data = new Date()
var ano = data.getFullYear()
var nasc = document.getElementById('txtn1').value
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var idade = ano - nasc
if(nasc.length == 0 || nasc > ano){
    window.alert(`[ERRO] Verifique os dados e tente novamente!`)
}

//verificacao sexo
var genero_masculino = document.getElementById('masculino')
var genero_feminino = document.getElementById('feminino')
//declaracao dos generos
if (genero_masculino.checked){
    var genero = 'Homem'    
} else if (genero_feminino.checked) {
    var genero = 'Mulher'
}
// jovem
if(genero == 'Homem' && idade <= 18){
    img.src = 'homemjovem.jpg'
}else if(genero == 'Mulher' && idade <= 18){
    img.src = 'mulherjovem.jpg'
// adulto
}else if(genero == 'Homem' && idade <= 60){
    img.src = 'homemadulto.jpg'
}else if(genero == 'Mulher' && idade <= 60){
    img.src = 'mulheradulta.jpg'
// velho
}else if(genero == 'Homem' && idade >= 60){
    img.src = 'homemvelho.jpg'
}else if(genero == 'Mulher' && idade >=60){
    img.src  = 'mulhervelha.jpg'
}

msg.innerHTML = `Identificamos que você é ${genero} e tem ${idade} anos.`

}



