let array = require("../nestedarray");
let logic = require(`../flatten`);
let depth = 0;
let result = logic(array,depth);
console.log(result);
