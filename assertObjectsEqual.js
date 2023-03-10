const eqObjects = require('./eqArrays');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;  
  if (eqObjects(actual, expected) === true) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(`Example label: ${inspect(actual)}`);