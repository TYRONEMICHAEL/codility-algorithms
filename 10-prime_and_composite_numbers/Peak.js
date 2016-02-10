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

    if(i * i === N) {
      small.push(i);
    }

    return small.concat(large);
  };

  for(var i = 1; i < len - 1; i++) {
    if(A[i-1] < A[i] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  factors = getFactors(len);
  console.log(factors, peaks);

  for(var i = 1; i < factors.length - 1; i++) {
    var numBlocks = len / factors[i];
    var peaksCopy = peaks.slice();
    var blockRegion = [0, factors[i]];
    var peaksInBlock = 0;

    while(peaksCopy.length > 0) {
      var peakIndex = peaksCopy[0] + 1;
      if( peakIndex >= blockRegion[0] && peakIndex <= blockRegion[1]) {
        peaksInBlock++;
        peaksCopy.shift();
      } else {
        if(peaksInBlock === 0) {
          peaksCopy = [];
        } else {
          blockRegion[0] = blockRegion[0] + factors[i];
          blockRegion[1] = blockRegion[1] + factors[i];
          peaksInBlock = 0;
          numBlocks--;
          if(numBlocks === 1) {
            return len / factors[i];
          }
        }
      }
    }
  }

  return peaks.length > 0 ? 1 : 0;
}

module.exports = (function () {
  var test = require('tape');

  test('Peaks', function (t) {
    t.equal(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]), 3);
    t.equal(solution([0, 1, 0, 0, 1, 0, 0, 1, 0]), 3);
    t.equal(solution([0]), 0);
    t.equal(solution([0,1,2]), 0);
    t.end();
  });
})();
