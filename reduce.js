module.exports = function reduce(elements, callback, startingValue) {
  if (!Array.isArray(elements) || !callback || !startingValue) {
    return [];
  }
  if(startingValue === undefined){
    startingValue = elements[i]
  }
  else{
    startingValue = callback(startingValue,elements[0],elements)
  }

  for (let index = 1; index < elements.length; index++) {
    let items = elements[index]
    startingValue = callback(startingValue, items, elements);
  }
  return startingValue;
};
