module.exports = function map(elements, cb) {
  if (!elements || !cb) return elements;
  let numberArray = [];
  for (let i = 0; i < elements.length; i++) {
    numberArray.push(cb(elements[i], i));
  }
  return numberArray;
};
