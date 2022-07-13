let array = require(`../array`);
let logic = require(`../reduce`);
let startingValue;
let callback = function (startingValue, index, array) {
  return startingValue + elements;
};
let result = logic(array, callback, startingValue);
console.log(result);

