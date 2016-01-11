// PermMissingElem
// Find the missing element in a given permutation.
// Score: 100%

function solution(A) {
  var arrLength = A.length + 1;
  var conSum = arrLength * (arrLength + 1) / 2;
  var arrSum = A.reduce(function (sum, val) {
    return sum + val;
  }, 0);

  return conSum - arrSum;
};

module.exports = (function () {
  var test = require('tape');

  test('PermMissingElem', function (t) {
    t.equals(solution([2,3,1,5]), 4);
    t.equals(solution([2,3,4]), 1);
    t.equals(solution([1,3]), 2);
    t.end();
  });
})();
