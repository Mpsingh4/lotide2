const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let last = [];
  for (let i = 1; i < arr.length; i++) {
    last.push(arr[i]);
  } return last;
};

module.exports = tail;