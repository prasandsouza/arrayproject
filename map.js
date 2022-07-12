module.exports = function map(elements, cb) {
  if (!Array.isArray(elements)) {
    return [];
  } else {
    let numberArray = [];
    for (let i = 0; i < elements.length; i++) {
      numberArray.push(cb(elements[i], i));
    }
    return numberArray;
  }
};
