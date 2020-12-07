class Usuarios {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.admin = false;
  }
  isAdm() {
    return this.admin;
  }
}

class Admin extends Usuarios {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const User1 = new Usuarios("email@teste.com", "senha123");

const Adm1 = new Admin("email@teste.com", "senha123");

console.log(User1.isAdm()); // false
console.log(Adm1.isAdm()); // true
