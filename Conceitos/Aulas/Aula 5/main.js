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

function soma(...params){
  return params.reduce((total,next) => total + next);
}

console.log(soma(1,2,3,4,4,6,7))

// SPREAD

/* const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2]

console.log(arr3) */

// SPREAD em objetos 

const usuario1 = {
  nome: 'Emanuel',
  idade: 18,
  empresa: 'Rocketseat'
}

const usuario2 = {...usuario1, empresa:'Ceuma'};

console.log(usuario2)