let array = require(`../array`);
let logic = require(`../each`);

let callback = function (number) {
  return number * 2;
};

let result = logic(array, callback);
console.log(result);
