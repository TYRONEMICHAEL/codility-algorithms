var test = require('tape');
var countDiv = require('../../src/prefix_sums/CountDiv');

test('CountDiv', function (t) {
  t.equal(countDiv(6, 11, 2), 3);
  t.equal(countDiv(0, 0, 11), 1);
  t.equal(countDiv(0, 10, 2), 6);
  t.equal(countDiv(1, 11, 2), 5);
  t.end();
});
