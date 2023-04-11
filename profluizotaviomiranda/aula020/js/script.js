function meuEscopo (){
      const form = document.querySelector('.form');
      const resultado = document.querySelector('.resultado')

      const pessoas = [];
// Isso para o load da pagin com o .preventDefault() e ja recebe o valor que vem do nome, sobrenome, peso, altura
   function recebeEventoForm (evento) {
      evento.preventDefault();
      const nome = form.querySelector('.nome');
      const sobrenome = form.querySelector('.sobrenome');
      const peso = form.querySelector('.peso');
      const altura = form.querySelector('.altura');
// Isso adiciona ao fim do array -> pessoas[]
   pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
   });
// esse console.log não parece importante, mas é! Ele que vai mostrar no console o Objeto pessoas[]
    
   console.log(pessoas); 
   
   resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
   
  } 
// esse comando seria uma especie de shorthand do evento onSubmit, está dizendo: Quando "Submitar", ira receber "recebeEventoForm"
  
   form.addEventListener('submit', recebeEventoForm);

}
// E com isso estou declarando a função para ser exibida
meuEscopo()

 