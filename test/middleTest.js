const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it('returns 3 for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});



//describe("#tail", () => {
  //it("returns 2, 3 for [1, 2, 3]", () => {
    //assert.deepEqual(tail([1, 2, 3]), [2, 3]);