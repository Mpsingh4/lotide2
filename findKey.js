const assertEqual = require('./assertEqual');

const findKey = function(obj, callBack) {
  const result = []
  for (let key in obj) {
    if (callBack(obj[key])) {
      result.push(key);
    }
  }
  // console.log(result);  commented out for clairty. 
  return result;
}

module.exports = findKey;