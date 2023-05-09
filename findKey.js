const assertEqual = require('./assertEqual');

const findKey = function(obj, value) {
  let result = []
  for (let key in obj) {
    if (value(obj[key])) {
      result.push(key);
    }
  }
  console.log(result);
  return result;
}

module.exports = findKey;