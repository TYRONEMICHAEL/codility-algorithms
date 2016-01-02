// OddOccurrencesInArray
// Find value that occurs in odd number of elements.
// Score: 100%

module.exports = function solution(A) {
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
