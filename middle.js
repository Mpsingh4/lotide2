const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function (arr) {
  if (arr.length <= 2) {
    return [];
  }
  let mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
      return [arr[mid - 1], arr[mid]];
    }
    else return [arr[mid]];
}


/*
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));

middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
*/