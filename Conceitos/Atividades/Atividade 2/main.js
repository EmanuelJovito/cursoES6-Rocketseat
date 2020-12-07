const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

 const idades = usuarios.map(function({idade}){
   return idade;
 })
 console.log(idades)

 const trabalho = usuarios.filter(function(iten){
   return iten === "Rocketseat" ? iten : false
 })

 console.log(trabalho)