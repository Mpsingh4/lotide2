const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj);
  for ( const key of keys) {
    if (obj[key] === value) {
      return key;
    }
  }
return undefined;
}

module.exports = findKeyByValue;