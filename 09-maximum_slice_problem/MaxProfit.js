// MaxProfit
// Given a log of stock prices compute the maximum possible earning.
// Score: 100%

function solution(A) {
  var len = A.length;
  var cheapestShare = Infinity;
  var max = 0;

  for(var i = 1; i < len; i++) {
    var currentMax;
    var cheapestShareMax;

    if(A[i-1] < cheapestShare) {
      cheapestShare = A[i-1];
    }

    currentMax = Math.max(A[i] - A[i-1], max);
    cheapestShareMax = Math.max(A[i] - cheapestShare, max);
    currentMax = currentMax > cheapestShareMax ? currentMax : cheapestShareMax;
    max = Math.max(currentMax, max);
  }

  return max;
}

module.exports = (function () {
  var test = require('tape');

  test('MaxProfit', function (t) {
    t.equal(solution([23171,23171,21123,21366,21013,21367]), 354);
    t.equal(solution([2,5,7,1,2,3]), 5);
    t.end();
  });
})();
