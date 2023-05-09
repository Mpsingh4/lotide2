const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let key in itemsToCount) {
    if (itemsToCount[key]) {
      allItems.forEach(element => {
        if (element === key) {
          if (!result[key]) {
            result[key] = 1;
          } else {
            result[key]++;
          }
        }
      });
    }
  }
  return result;
}

module.exports = countOnly;