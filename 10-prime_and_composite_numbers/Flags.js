// Flags
// Find the maximum number of flags that can be set on mountain peaks.
// Score: 93%

function solution(A) {
  var len = A.length;
  var peaks = [];
  var maxFlags = 1;

  var checkPeaks = function (k, peaks) {
    var prevPeak  = peaks[0];
    var flagsLeft = k - 1;

    for(var i = 1; i < peaks.length && k * k <= len; i++) {
      var currentPeak = peaks[i];
      if(currentPeak - prevPeak >= k) {
        flagsLeft--;
        prevPeak = currentPeak;
        if(flagsLeft === 0) {
          return true;
        }
      }
    }

    return false;
  };

  for(var i = 1; i < len - 1; i++) {
    if(A[i-1] < A[i] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  if(peaks.length === 0) {
    return 0;
  }


  for(var i = peaks.length; i > 0; i--) {
    var check;

    if(i === 1) {
      break;
    }

    check = checkPeaks(i, peaks);

    if(check) {
      maxFlags = i;
      break;
    }
  }


  return maxFlags;
}

module.exports = (function () {
  var test = require('tape');

  test('Flags', function (t) {
    t.equal(solution([1,5,3,4,3,4,1,2,3,4,6,2]), 3);
    t.equal(solution([0, 0, 0, 0, 0, 1, 0, 1, 0, 1]), 2);
    t.end();
  });
})();
