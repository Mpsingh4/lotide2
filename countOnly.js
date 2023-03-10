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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);