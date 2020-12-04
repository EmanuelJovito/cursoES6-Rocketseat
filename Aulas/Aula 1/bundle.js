"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var matematica = /*#__PURE__*/function () {
  function matematica() {
    _classCallCheck(this, matematica);
  }

  _createClass(matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return matematica;
}();

console.log(matematica.soma(5, 2));
