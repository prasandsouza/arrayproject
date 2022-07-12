let array = require(`../array`);
let logic = require(`../find`);
let callback = function (number) {
  if (number === 2) return number;
};

let result = logic(array, callback);
console.log(result);
