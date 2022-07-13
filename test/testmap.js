let array = require(`../array`);
let logic = require(`../map`);

let callback = function (number,index,array) {
  return number * 2
};

let result = logic(array, callback);
console.log(result);
