// PermCheck
// Check whether array A is a permutation
// Score: 100%

module.exports = function solution(A) {
  var arrLength = A.length;
  var permTracker = {};
  var count = 0;

  for(var i = 0; i < arrLength; i++) {
    var val = A[i];
    if(val > arrLength) {
      break;
    }

    if(!permTracker[A[i]]) {
      permTracker[A[i]] = true;
      count += 1;
    }
  };

  return count === arrLength ? 1 : 0;
};
