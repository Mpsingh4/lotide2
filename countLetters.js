const assertEquals = require("./assertEqual");

const countLetters = function(str) {
  const upperCaseStr = str.toUpperCase();
  let result = {};
  for (let letter of upperCaseStr) {
    if (result[letter]) {
      result[letter]++
      } else {
        result[letter] = 1;
      }
    }
    let output = '';
    for (let key in result) {
      output += `${key}: ${result[key]}, `;
    }
    return output;
}

module.exports = countLetters;