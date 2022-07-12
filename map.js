module.exports = function map(elements, callback) {
  if (!Array.isArray(elements) || !callback) {
    return [];
  } else {
    let numberArray = [];
    for (let i = 0; i < elements.length; i++) {
      numberArray.push(callback(elements[i], i));
    }
    return numberArray;
  }
};
