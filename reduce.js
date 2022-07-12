module.exports = function reduce(elements, cb, startingValue) {
  if (!elements || !cb || !startingValue) return [];
  for (let i = 0; i < elements.length; i++) {
    let accumulator = cb(startingValue, elements[i]);
    startingValue = accumulator;
  }
  return startingValue;
};
