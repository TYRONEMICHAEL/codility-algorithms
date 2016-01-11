var test = require('tape');
var maxProductOfThree = require('../../src/sorting/MaxProductOfThree');

test('MaxProductOfThree', function (t) {
  t.equal(maxProductOfThree([-3,1,2,-2,5,6]), 60);
  t.equal(maxProductOfThree([-5,1,2,-10,5,6]), 300);
  t.end();
});
