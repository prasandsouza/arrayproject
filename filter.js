module.exports = function filter(elements, callback) {
  if (!Array.isArray(elements) || !callback) {
    return [];
  }
  let filterarray = [];
  for (let index = 0; index < elements.length; index++) {
    if (callback(elements[index], index, elements)==true) {
      filterarray.push(elements[index]);
    }
  }
  return filterarray;
};
