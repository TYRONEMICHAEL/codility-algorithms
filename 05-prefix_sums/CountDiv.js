// CountDiv
// Compute number of integers divisible by k in range [a..b].
// Score: 100%

function solution(A, B, K) {
  if(A % K === 0) {
    return Math.floor((B - A) / K) + 1;
  }
  return Math.floor((B - (A - A % K)) / K);
};

module.exports = (function () {
  var test = require('tape');

  test('CountDiv', function (t) {
    t.equal(solution(6, 11, 2), 3);
    t.equal(solution(0, 0, 11), 1);
    t.equal(solution(0, 10, 2), 6);
    t.equal(solution(1, 11, 2), 5);
    t.end();
  });

})();
