// CountSemiprimes
// Count the semiprime numbers in the given range [a..b]
// Score: 100%

function solution(N, P, Q) {
  var sieve = {
    0: { isPrime: false },
    1: { isPrime: false }
  };

  var primes = [];
  var semiPrimes = [];

  for(var i = 2; i <= N; i++) {
    sieve[i] = { isPrime: true };
  }

  for(var i = 2; i * i <= N; i++) {
    if(sieve[i].isPrime) {
      var k = i * i;
      while(k <= N) {
        sieve[k] = { isPrime: false };
        k += i;
      }
    }
  }

  for(var i = 2; i <= N; i++) {
    if(sieve[i].isPrime) {
      primes.push(i);
    }
  }

  primes.forEach(function(val, index) {
    for(var i = index; val * primes[i] <= N; i++) {
      sieve[val * primes[i]].isSemiPrime = true;
    }
  });

  for(var i = 0; i < P.length; i++) {
    var semiPrimeCount = 0;
    for(var ii = P[i]; ii <= Q[i]; ii++) {
      if(sieve[ii].isSemiPrime) {
        semiPrimeCount += 1;
      }
    }

    semiPrimes.push(semiPrimeCount);
  }


  return semiPrimes;
}

module.exports = (function () {
  var test = require('tape');

  test('CountSemiprimes', function (t) {
    t.deepEqual(solution(26, [1,4,16], [26,10,20]), [10, 4, 0]);
    t.end();
  });
})();
