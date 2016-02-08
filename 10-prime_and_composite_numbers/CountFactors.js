// CountFactors
// Count factors of given number n.
// Score: 100%

function solution(N) {
  var factors = 0;
  var i = 1;
  while(i * i < N) {
    if(N % i === 0) {
      factors += 2;
    }
    i++;
  }

  if(i * i === N) {
    factors += 1;
  }

  return factors;
}

module.exports = (function () {
  var test = require('tape');

  test('CountFactors', function (t) {
    t.equal(solution(24), 8);
    t.equal(solution(5), 2);
    t.end();
  });
})();
