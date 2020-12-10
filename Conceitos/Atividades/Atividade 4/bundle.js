"use strict";

// DESESTRUTURAÇÃO SIMPLES

/* const empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC",
  },
};

const nome = (empresa) => empresa.nome;

const cidade = (empresa) => empresa.endereco.cidade;

const estado = (empresa) => empresa.endereco.estado

console.log(nome(empresa));
console.log(cidade(empresa));
console.log(estado(empresa)); */
// DESESTRUTURAÇÃO EM PARâMETROS
var info = function info(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
};

var usuario = {
  nome: "Diego",
  idade: 23
};
console.log(info(usuario));
