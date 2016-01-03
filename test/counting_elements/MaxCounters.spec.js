var test = require('tape');
var maxCounters = require('../../src/counting_elements/MaxCounters');

test('MaxCounters', function (t) {
  t.deepEqual(maxCounters(5, [3,4,4,6,1,4,4]), [3,2,2,4,2]);
  t.end();
});
