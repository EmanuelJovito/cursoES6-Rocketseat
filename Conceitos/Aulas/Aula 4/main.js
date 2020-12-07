const usuario = {
  nome: "Emanuel",
  idade: 18,
  endereco: {
    cidade: "São Luís",
    estado: "MA",
  },
};

// const {nome, idade, endereco: {cidade, estado}} = usuario

// console.log(nome);
// console.log(idade);
// console.log(cidade);
// console.log(estado)

function msotraNome({ nome, idade}){
  console.log(nome, idade)
}
msotraNome(usuario);
