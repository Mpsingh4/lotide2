const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
      console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`Assertion Failed!!!: [${actual}] !== [${expected}]`);
};

module.exports = assertArraysEqual;


/* assertArraysEqual([1, 5, 3], [1, 5, 3]); // => should pass
assertArraysEqual([1, 2, 3], [4, 5, 6]); // => should fail
assertArraysEqual([], []); // => should pass
assertArraysEqual([1, 2, 3], [1, 2]); // => should fail
assertArraysEqual([1, '2', 3], [1, 2, 3]); // => should fail */