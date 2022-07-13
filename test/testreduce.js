let array = require(`../array`);
let logic = require(`../reduce`);
let startingValue;
let callback = function (startingValue, index, elements) {
  return startingValue + index;
};
let result = logic(array, callback, startingValue);
console.log(result);