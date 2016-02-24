// CountNonDivisible
// Count factors of given number n.
// Score: 100%

function solution(A) {
  var N = A.length;
  var count = [];
  var divisors = [];
  var i = k = 1;
  var result = [];

  for (i = 0; i < 2*N+1; i++){
    count.push(0);
    divisors.push(0);
  }

  for (i = 0; i < N; i++){
    count[A[i]]++;
    result.push(0);
  }

  for (i = 1; i <= 2*N; i++) {
    k = i;
    while (k <= 2*N) {
      divisors[k] += count[i];
      k += i;
    }
  }

  for (i = 0; i < N; i++) {
    result[i] = N - divisors[A[i]];
  }

  return result;
}

module.exports = (function () {
  var test = require('tape');

  test('CountNonDivisible', function (t) {
    t.deepEqual(solution([3,1,2,3,6]), [2,4,3,2,0]);
    t.end();
  });
})();
