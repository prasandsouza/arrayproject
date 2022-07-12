let array = require(`../array`);
let logic = require(`../filter.js`);

let callback = function (number) {
  if (number % 2 === 0) return number;
};

let result = logic(array, callback);
console.log(result);
