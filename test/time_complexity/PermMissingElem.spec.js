var test = require('tape');
var permMissingElem = require('../../src/time_complexity/PermMissingElem');

test('PermMissingElem', function (t) {
  t.equals(permMissingElem([2,3,1,5]), 4);
  t.equals(permMissingElem([2,3,4]), 1);
  t.equals(permMissingElem([1,3]), 2);
  t.end();
});
