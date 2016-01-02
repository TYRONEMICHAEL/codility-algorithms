// PermMissingElem
// Find the missing element in a given permutation.
// Score: 100%

module.exports = function solution(A) {
  var arrLength = A.length + 1;
  var conSum = arrLength * (arrLength + 1) / 2;
  var arrSum = A.reduce(function (sum, val) {
    return sum + val;
  }, 0);

  return conSum - arrSum;
};
