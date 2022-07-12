const items = require("./array");

module.exports = function flatten(elements, depth) {
  if (!Array.isArray(elements)) {
    return [];
  } else {
    let nestedArray,
      count = 0;
    do {
      let flattenarray = [];
      nestedArray = false;
      for (let i=0;i<elements.length;i++) {
        if (Array.isArray(elements[i])) {
          flattenarray.push(...elements[i]);
          nestedArray = true;
        } else if (elements[i] === undefined) {
          continue;
        } else {
          flattenarray.push(elements[i]);
        }
      } 
      count++;
      elements = flattenarray;
      if (count === depth || !nestedArray) {
        break;
      } else {
        continue;
      }
    } while (nestedArray);
    return elements;
  }
};
