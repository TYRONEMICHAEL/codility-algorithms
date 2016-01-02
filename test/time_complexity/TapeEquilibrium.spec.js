var test = require('tape');
var tapeEquilibrium = require('../../src/time_complexity/TapeEquilibrium');

test('TapeEquilibrium', function (t) {
  t.equals(tapeEquilibrium([3,1,2,4,3]), 1);
  t.equals(tapeEquilibrium([-3,-1,2,4,3]), 1);
  t.end();
});
