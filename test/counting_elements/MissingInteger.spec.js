var test = require('tape');
var missingInteger = require('../../src/counting_elements/MissingInteger');

test('MissingInteger', function (t) {
  t.equal(missingInteger([1,3,6,4,1,2]), 5);
  t.end();
});
