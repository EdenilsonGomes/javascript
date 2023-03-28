let numero = Number(prompt('Digite um número'));

document.getElementById('numero-inteiro').innerHTML = numero;
// aqui começa o texto
document.getElementById('texto').innerHTML += `Raiz quadrada: ${numero ** 0.5}<br/>`;

document.getElementById('texto').innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)} <br/>`

document.getElementById('texto').innerHTML += `É NaN: ${Number.isNaN(numero)} <br/>`

document.getElementById('texto').innerHTML += `Arredonando para baixo: ${Math.floor(numero)} <br/>`

document.getElementById('texto').innerHTML += `Arredonando para cima: ${Math.ceil(numero)}<br/>`

document.getElementById('texto').innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}`

