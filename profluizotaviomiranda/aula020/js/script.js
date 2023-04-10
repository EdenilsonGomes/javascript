function meuEscopo (){
   const form = document.querySelector('.form');
   const resultado = document.querySelector('.resultado')

   

   function recebeEventoForm (evento) {
      evento.preventDefault();
      const nome = form.querySelector('.nome');
      const sobrenome = form.querySelector('.sobrenome');
      const peso = form.querySelector('.peso');
      const altura = form.querySelector('.altura');

   pessoas.push(criaPessoa());

   
   }
   
   function criaPessoa (nome, sobrenome, peso, altura){
      return {
         nome: nome,
         sobrenome: sobrenome,
         peso: peso,
         altura: altura
      };
      
      
   } 
   const pessoas = [nome, sobrenome, peso, altura];
   form.addEventListener('submit', recebeEventoForm);
}
meuEscopo()
