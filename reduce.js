module.exports = function reduce(elements, callback, startingValue) {
  if (!Array.isArray(elements)||!callback||!startingValue) {
    return [];
  } else {
    for (let i = 1; i < elements.length; i++) {
     startingValue = callback(startingValue,elements[i],elements)
    }
    return startingValue;
  }
};