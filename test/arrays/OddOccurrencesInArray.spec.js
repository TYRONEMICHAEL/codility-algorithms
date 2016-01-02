var test = require('tape');
var binaryGap = require('../../src/arrays/OddOccurrencesInArray');

test('OddOccurrencesInArray', function (t) {
  t.equal(binaryGap([9,3,9,3,9,7,9]), 7);
  t.equal(binaryGap([9,9,7,9,7]), 9);
  t.end();
});
