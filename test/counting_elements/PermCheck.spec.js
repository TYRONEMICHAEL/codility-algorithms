var test = require('tape');
var permCheck = require('../../src/counting_elements/PermCheck');

test('PermCheck', function (t) {
  t.equal(permCheck([4,1,3,2]), 1);
  t.equal(permCheck([4,1,3]), 0);
  t.equal(permCheck([1,4,1]), 0);
  t.end();
});
