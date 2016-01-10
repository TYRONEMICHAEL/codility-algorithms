var test = require('tape');
var numberOfDiscIntersections = require('../../src/sorting/NumberOfDiscIntersections');

test('NumberOfDiscIntersections', function (t) {
  t.equal(numberOfDiscIntersections([1,5,2,1,4,0]), 11);
  t.equal(numberOfDiscIntersections([1,1,1]), 3);
  t.end();
});
