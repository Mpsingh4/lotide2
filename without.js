const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


const without = function(stay, remove) {
  let result = [];
  for (let i = 0; i < stay.length; i++) {
    if (Array.isArray(stay[i])) {
      result.push(without(stay[i], remove));
    } else if (!remove.includes(stay[i])) {
      result.push(stay[i]);
    }
  }
  return result;
};

module.exports = without;