module.exports = function filter(elements, callback) {
  if (!Array.isArray(elements)) {
    return [];
  } else {
    let filterarray =[]
    for (let index = 0; index < elements.length; index++) {
      if (callback(elements[index])) {
        filterarray.push(elements[index])
      }
    }
    return filterarray;
  }
};