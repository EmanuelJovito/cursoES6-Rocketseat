// class list{
//   constructor(){
//     this.data = [];
//   }

//   add(data){
//     this.data.push(data);
//     console.log(this.data);
//   }
// }

// class todoList extends list{
//   constructor(){
//     super();

//     this.usuario = "Emanuel"
//   }

//   mostraUsuario(){
//     console.log(this.usuario)
//   }
// }

// const MinhaLista = new todoList();

// const button = document.getElementById("novotodos")

// button.onclick = ()=> {
//   MinhaLista.add();
// }

// MinhaLista.mostraUsuario()

class matematica{
  static soma(a,b){
    return a + b;
  }
}

console.log(matematica.soma(5,2))
