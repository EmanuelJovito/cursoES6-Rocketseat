// REST

/* const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

function soma(...parans) {
  return parans.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2)); */

// SPREAD

const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil",
  },
};

const usuario2 = { ...usuario, nome: "Gabriel" };

console.log(usuario2);

const usuario3 = {
  ...usuario,
  endereco: { ...usuario.endereco, cidade: "lontras" },
};

console.log(usuario3);
