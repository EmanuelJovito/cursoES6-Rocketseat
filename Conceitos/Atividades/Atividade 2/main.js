// const usuarios = [
//   { nome: "Diego", idade: 23, empresa: "Rocketseat" },
//   { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
//   { nome: "Lucas", idade: 30, empresa: "Facebook" },
// ];

// const idades = usuarios.map(function ({ idade }) {
//   return idade;
// });
// console.log(idades);

// // FILTER

// const trabalho = usuarios.filter(
//   (iten) => iten.empresa === "Rocketseat" && iten.idade > 18
// );

// console.log(trabalho);

// // FIND 

// const find = usuarios.find((iten) => (
//   iten.empresa === "Google"
// ))

// console.log(find)

// UNINDO OPERAÇÕES

const usuarios = [
  { nome: "Diego", idade: 46, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 30, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 60, empresa: "Facebook" },
];

const idadeMax = usuarios.filter((iten)=>(
  iten.idade <= 50
))

console.log(idadeMax)