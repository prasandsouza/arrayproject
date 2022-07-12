module.exports = function filter(elements, callback) {
  if (!Array.isArray(elements)) {
    return [];
  } else {
    let numberArray = [];
    for (let i = 0; i < elements.length; i++) {
      if (callback(elements[i])) {
        numberArray.push(callback(elements[i], i));
      }
    }
    return numberArray;
  }
};
