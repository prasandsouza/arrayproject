let array = require(`../array`)
let logic = require(`../filter.js`)

let callback = function(number,index,array){
    if(number%2===0) return true
}

let result = logic(array,callback)
console.log(result)