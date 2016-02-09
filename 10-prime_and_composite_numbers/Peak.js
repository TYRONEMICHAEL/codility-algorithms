// Peaks
// Find the maximum number of flags that can be set on mountain peaks.
// Score: 100%

function solution(A) {
  var len = A.length;
  var peaks = [];
  var factors = [];

  var getFactors = function(N) {
    var i = 1;
    var small = [];
    var large = [];

    while(i * i < len) {
      if(len % i === 0) {
        small.push(i);
        large.unshift(N / i); // O(1)
      }

      i++;
    }

    return small.concat(large);
  };

  for(var i = 1; i < len - 1; i++) {
    if(A[i-1] < A[i] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  factors = getFactors(len);

  for(var i = 0; i < factors.length; i++) {
    var numBlocks = len / factors[i];
    console.log(numBlocks);
  }

  return peaks.length;
}

module.exports = (function () {
  var test = require('tape');

  test('Peaks', function (t) {
    t.equal(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]), 3);
    t.end();
  });
})();
