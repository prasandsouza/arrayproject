module.exports = function reduce(elements, cb, startingValue) {
  if (!Array.isArray(elements)) {
    return [];
  } else {
    for (let i = 0; i < elements.length; i++) {
      let accumulator = cb(startingValue, elements[i]);
      startingValue = accumulator;
    }
    return startingValue;
  }
};
