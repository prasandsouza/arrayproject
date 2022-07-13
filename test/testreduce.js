let array = require(`../array`);
let logic = require(`../reduce`);
let startingValue;
let callback = function (startingValue, index, elements,array) {
  return startingValue + index;
};
let result = logic(array, callback, startingValue);
console.log(result);