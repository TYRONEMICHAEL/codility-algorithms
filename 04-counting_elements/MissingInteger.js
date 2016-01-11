// MissingInteger
// Find the minimal positive integer not occurring in a given sequence.
// Score: 100%

function solution(A) {
  var numTracker = {};
  var missingElem = 1;

  A.forEach(function (val) {
    if(!numTracker[val]) {
      numTracker[val] = true;
    }

    if(val === missingElem) {
      var nextElem;
      var counter = val;
      while(!nextElem) {
        counter += 1;
        if(!numTracker[counter]) {
          nextElem = counter;
        }
      }
      missingElem = nextElem;
    }
  });

  return missingElem;
};

module.exports = (function () {
  var test = require('tape');

  test('MissingInteger', function (t) {
    t.equal(solution([1,3,6,4,1,2]), 5);
    t.end();
  });
})();
