"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (_ref) {
  var idade = _ref.idade;
  return idade;
});
console.log(idades);
var trabalho = usuarios.filter(function (iten) {
  return iten === "Rocketseat" ? iten : false;
});
console.log(trabalho);
