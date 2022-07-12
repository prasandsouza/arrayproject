module.exports = function find(elements, cb) {
    if (!Array.isArray(elements) || !cb) {
        return [];
      }else{

  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i];
    }
  }
}
}
