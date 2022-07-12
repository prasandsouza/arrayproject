module.exports = function filter(elements, callback) {
  if (!Array.isArray(elements)) {
    return [];
  } else {
    for (let i = 0; i < elements.length; i++) {
      if (callback(elements[i])) {
        return callback(elements[i], i);
      }
    }
  }
};
