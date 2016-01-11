// MaxProductOfThree
// Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
// Score: 100%

function solution(A) {
  var len = A.length;

  A.sort(function (a, b) {
    return b - a;
  });

  var left = A[0] * A[1] * A[2];
  var right = A[0] * A[len - 2] * A[len - 1];

  return left > right ? left : right;
};

module.exports = (function () {
  var test = require('tape');

  test('MaxProductOfThree', function (t) {
    t.equal(solution([-3,1,2,-2,5,6]), 60);
    t.equal(solution([-5,1,2,-10,5,6]), 300);
    t.end();
  });
})();
