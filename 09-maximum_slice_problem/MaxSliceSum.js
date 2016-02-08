// MaxSliceSum
// Find a maximum sum of a compact subsequence of array elements.
// Score: 100%

function solution(A) {
  var len = A.length;
  var currentMax = 0;
  var max = 0;
  var currenthighestValue = A[0];

  for(var i = 0; i < len; i++) {
    currenthighestValue = A[i] > currenthighestValue ? A[i] : currenthighestValue;
    currentMax = Math.max(A[i] + currentMax, 0);
    max = Math.max(currentMax, max);

    if(currenthighestValue > max) {
      max = currenthighestValue;
    }
  }

  return max === 0 ? currenthighestValue : max;
}

module.exports = (function () {
  var test = require('tape');

  test('MaxSliceSum', function (t) {
    t.equal(solution([3,2,-6,4,0]), 5);
    t.equal(solution([-3,10,-6,-4,-1]), 10);
    t.equal(solution([10]), 10);
    t.equal(solution([-2, 1]), 1);
    t.equal(solution([1,1,1]), 3);
    t.equal(solution([-2, -2]), -2);
    t.equal(solution([-2, 1, 1]), 2);
    t.end();
  });
})();
