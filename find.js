module.exports = function find(elements, callback) {
  if (!Array.isArray(elements) || !callback) {
    return [];
  } else {
    for (let i = 0; i < elements.length; i++) {
      if (callback(elements[i])) {
        return elements[i];
      }
    }
  }
};
