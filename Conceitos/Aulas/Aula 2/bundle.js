"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
var soma = arr.reduce(function (total, next) {
  return total + next;
});
console.log(soma);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 7;
});
console.log(find);
