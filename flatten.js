module.exports = function flatten(elements, depth) {
    if (!Array.isArray(elements)) {
        return [];
      }
  if (depth === undefined) {
    depth = 1;
  }
  let flatarray = [];
  for (let index = 0; index < elements.length; index++) {
    if (Array.isArray(elements[index]) && depth > 0) {
      flatarray = flatarray.concat(flatten(elements[index], depth - 1));
    } else if (elements[index] === undefined) continue;
    else {
      flatarray.push(elements[index]);
    }
  }
  return flatarray;
};
