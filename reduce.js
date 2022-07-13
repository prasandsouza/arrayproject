module.exports = function reduce(elements, callback, startingValue) {
    if (!Array.isArray(elements) || !callback) {
      return [];
    }
    if (startingValue === undefined) {
      startingValue = elements[0];
    }   
    for (let index = 1; index < elements.length; index++) {
      let items = elements[index];
      startingValue = callback(startingValue, items,index, elements);
    }
    return startingValue;
  };
  