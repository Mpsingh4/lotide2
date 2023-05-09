const flatten = function(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      output = [...output, ...flatten(arr[i])];
      // used spread operator on elements to flattened array into the output
    } else {
      output.push(arr[i]);
    }
  }
  return output;
};

module.exports = flatten;