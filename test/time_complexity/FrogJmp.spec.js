var test = require('tape');
var frogJmp = require('../../src/time_complexity/FrogJmp');

test('FrogJmp', function (t) {
  t.equal(frogJmp(10,85,30), 3);
  t.end();
});
