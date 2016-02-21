// CountSemiprimes
// Count the semiprime numbers in the given range [a..b]
// Score: 100%

function solution(N, P, Q) {
  var factors = [0];
  var primes = {};
  var semiPrimes = [];
  var prefixSemiPrimes = [];
  var prefixSemiPrimesCount = 0;
  var semiPrimesCount = [];

  for(var i = 0; i <= N; i++) {
    factors[i] = 0;
  };

  for(var i = 2; i * i <= N; i++) {
    if(factors[i] === 0) {
      var k = i * i;
      while(k <= N) {
        if(factors[i] === 0) {
          factors[k] = i;
        }
        k += i;
      }
    }
  }

  var factorization = function (x, F) {
    var primeFactors = [];
    while(F[x] > 0) {
      primeFactors.push(F[x]);
      x = x / F[x];
    }
    primeFactors.push(x);
    return primeFactors;
  };

  for(var i = 0; i <= N; i++) {
    var isSemiPrime = factorization(i, factors).length === 2;
    if(isSemiPrime) {
      semiPrimes[i] = 1;
    } else{
      semiPrimes[i] = 0;
    }
  };

  for(var i = 0; i <= N; i++) {
    if(semiPrimes[i]) {
      prefixSemiPrimesCount++;
    }
    prefixSemiPrimes.push(prefixSemiPrimesCount);
  };


  for(var i = 0; i < P.length; i++) {
    semiPrimesCount.push(prefixSemiPrimes[Q[i]] - prefixSemiPrimes[P[i] - 1]);
  }


  return semiPrimesCount;
}

module.exports = (function () {
  var test = require('tape');

  test('CountSemiprimes', function (t) {
    t.deepEqual(solution(26, [1,4,16], [26,10,20]), [10, 4, 0]);
    t.end();
  });
})();
