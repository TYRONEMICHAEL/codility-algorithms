var test = require('tape');
var genomicRangeQuery = require('../../src/prefix_sums/GenomicRangeQuery');

test('("CAGCCTA", [2, 5, 0], [4, 5, 6]) ', function (t) {
  t.deepEqual(genomicRangeQuery('CAGCCTA', [2, 5, 0], [4, 5, 6]), [2, 4, 1]);
  t.end();
});

test('("CAGCCTA", [0], [6]) ', function (t) {
  t.deepEqual(genomicRangeQuery('CAGCCTA', [0], [6]), [1]);
  t.end();
});

test('("A", [0], [0]) ', function (t) {
  t.deepEqual(genomicRangeQuery('A', [0], [0]), [1]);
  t.end();
});

test('("A", [10], [10]) ', function (t) {
  t.deepEqual(genomicRangeQuery('A', [10], [10]), [4]);
  t.end();
});
