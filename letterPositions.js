const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.toUpperCase();
  for (let i = 0; i < sentence.length; i++) {
    const key = sentence[i];
    if (key !== ' ') {
      if (!results[key]) {
        results[key] = [i];
      } else {
        results[key].push(i);
      }
    }
  }
  return results;
};

console.log(letterPositions('Lighthouse Labs looks Like a Legit lab '))