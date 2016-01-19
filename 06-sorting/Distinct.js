// Distinct
// Compute number of distinct values in an array.
// Score: 100%

function solution(A) {
  var history = {};
  var distinct = 0;

  A.forEach(function (val, i) {
    if(!history[val]) {
      history[val] = true;
      distinct += 1;
    }
  });

  return distinct;
}

module.exports = (function () {
  var test = require('tape');

  test('Distinct', function (t) {
    t.equal(solution([2,2,1,1,2,3,1]), 3);
    t.end();
  });
})();
