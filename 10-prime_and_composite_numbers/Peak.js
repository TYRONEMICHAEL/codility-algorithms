// Peaks
// Find the maximum number of flags that can be set on mountain peaks.
// Score: 100%

function solution(A) {
  var len = A.length;
  var peaks = 0;

  for(var i = 1; i < len - 1; i++) {
    if(A[i-1] < A[i] && A[i] > A[i + 1]) {
      peaks += 1;
    }
  }

  return peaks;
}

module.exports = (function () {
  var test = require('tape');

  test('Peaks', function (t) {
    t.equal(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]), 3);
    t.end();
  });
})();
