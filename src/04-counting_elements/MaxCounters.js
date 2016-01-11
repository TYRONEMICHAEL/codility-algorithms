// MaxCounters
// Calculate the values of counters after applying all alternating operations:
// increase counter by 1; set value of all counters to current maximum.
// Score: 100%

function solution(N, A) {
  var maxCounter = 0;
  var trackedCounter = 0;
  var counters = [];

  for (var i = 0; i < N; i++) {
    counters.push(0);
  }

  A.forEach(function(val, i) {
    if(val <= N) {
      if(counters[val - 1] < maxCounter) {
        counters[val - 1] = maxCounter;
      }

      counters[val - 1] += 1;

      if(counters[val - 1] > trackedCounter) {
        trackedCounter = counters[val - 1];
      }

    } else {
      maxCounter = trackedCounter;
    }
  });

  counters.forEach(function (val, i) {
    if(val < maxCounter) {
      counters[i] = maxCounter;
    }
  });

  return counters;
};

module.exports = (function() {
  var test = require('tape');

  test('MaxCounters', function (t) {
    t.deepEqual(solution(5, [3,4,4,6,1,4,4]), [3,2,2,4,2]);
    t.end();
  });
})();
