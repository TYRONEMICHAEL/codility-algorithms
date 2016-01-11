// MaxProductOfThree
// Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
// Score: 100%

module.exports = function solution(A) {
  var len = A.length;

  A.sort(function (a, b) {
    return b - a;
  });

  var left = A[0] * A[1] * A[2];
  var right = A[0] * A[len - 2] * A[len - 1];

  return left > right ? left : right;
};
