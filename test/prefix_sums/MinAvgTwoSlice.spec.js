var test = require('tape');
var minAvgTwoSlice = require('../../src/prefix_sums/MinAvgTwoSlice');

test('MinAvgTwoSlice', function (t) {
  t.equal(minAvgTwoSlice([4,2,2,5,1,5,8]), 1);
  t.end();
});
