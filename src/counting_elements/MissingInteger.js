// MissingInteger
// Find the minimal positive integer not occurring in a given sequence.
// Score: 100%

module.exports = function solution(A) {
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
