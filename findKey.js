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

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);