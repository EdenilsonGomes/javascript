/* 
Luiz Otávio Miranda tem 30 anos, pesa 84 Kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = 'Edenilson'
const sobrenome = 'Gomes'
const idade = 20;
const peso = 95;
const alturaEmM = 1.83
const anoNascimento = 2002

let imc; // peso / (altura * altura)
imc = peso / (alturaEmM * alturaEmM)

console.log(nome, sobrenome, 'tem', idade,'anos, pesa', peso,'Kg')
console.log('tem', alturaEmM, 'de altura e seu IMC é de', imc)
console.log(nome, 'nasceu em', anoNascimento)