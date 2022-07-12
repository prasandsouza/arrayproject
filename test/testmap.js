let array = require(`../array`);
let logic = require(`../map`);

let callback = function (number) {
  if (number / 2 == 1) return number;
};

let result = logic(array, callback);
console.log(result);
