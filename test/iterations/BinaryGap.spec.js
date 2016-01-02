var test = require('tape');
var binaryGap = require('../../src/iterations/BinaryGap');

test('BinaryGap', function(t) {
  t.equal(binaryGap(1041), 5);
  t.equal(binaryGap(9), 2);
  t.equal(binaryGap(20), 1);
  t.equal(binaryGap(529), 4);
  t.equal(binaryGap(15), 0);
  t.equal(binaryGap(328), 2);
  t.end();
});
