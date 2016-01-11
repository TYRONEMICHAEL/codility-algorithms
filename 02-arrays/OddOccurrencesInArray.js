// OddOccurrencesInArray
// Find value that occurs in odd number of elements.
// Score: 100%

function solution(A) {
  var unpaired;
  var unpairedDict = {};

  A.forEach(function(val) {
    if(!unpairedDict[val]) {
      unpairedDict[val] = true;
    } else {
      delete unpairedDict[val];
    }
  });

  for(var k in unpairedDict) {
    unpaired = parseInt(k);
    break;
  }

  return unpaired;
};

module.exports = (function() {
  var test = require('tape');

  test('OddOccurrencesInArray', function (t) {
    t.equal(solution([9,3,9,3,9,7,9]), 7);
    t.equal(solution([9,9,7,9,7]), 9);
    t.end();
  });
})();
