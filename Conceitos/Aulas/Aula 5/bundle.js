"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// REST 

/* const usuario = {
  nome: 'Emanuel',
  idade: 18,
  empresa: 'Ceuma'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto) */
// REST em Array

/* const arr = [1,2,3,4];

const [a,b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c); */
//REST em parametros de funções
function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2, 3, 4, 4, 6, 7)); // SPREAD

/* const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2]

console.log(arr3) */
// SPREAD em objetos 

var usuario1 = {
  nome: 'Emanuel',
  idade: 18,
  empresa: 'Rocketseat'
};

var usuario2 = _objectSpread(_objectSpread({}, usuario1), {}, {
  empresa: 'Ceuma'
});

console.log(usuario2);
