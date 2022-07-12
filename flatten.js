module.exports = function flatten(elements) {
  if (!Array.isArray(elements)) {
    return [];
  } else {
    let flattenarray = [];
    for (let i = 0; i < elements.length; i++) {
      if (Array.isArray(elements[i])) {
        flattenarray = flattenarray.concat(flatten(elements[i]));
      } else {
        flattenarray.push(elements[i]);
      }
    }
    return flattenarray;
  }
};
