module.exports = function map(elements, callback) {
  if (!Array.isArray(elements) || !callback) {
    return [];
  } else {
    let numberArray = [];
    for (let index = 0; index < elements.length; index++) {
      numberArray.push(callback(elements[index], index, elements));
    }
    return numberArray;
  }
};
