module.exports = function filter(elements, cb) {
  if (!Array.isArray(elements)) {
    return [];
  } else {
    let numberArray = [];
    for (let i = 0; i < elements.length; i++) {
      if (cb(elements[i])) {
        numberArray.push(cb(elements[i], i));
      }
    }
    return numberArray;
  }
};
