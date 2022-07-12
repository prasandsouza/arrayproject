let array = require("../nestedarray");
let logic = require(`../flatten`);

let result = logic([1, [2], [[3]], , [[[[[[{id :0, name : 'sharun'}]]]]]], [[[4]]]]);
console.log(result);
