module.exports = function reduce(elements, callback, startingValue) {
  if (!Array.isArray(elements)||!callback||!startingValue) {
    return [];
  } else {
    for (let i = 1; i < elements.length; i++) {
      let accumulator = callback(startingValue, elements[i]);
      startingValue = accumulator;
    }
    return startingValue;
  }
};
