// FrogRiverOne
// Find the earliest time when a frog can jump to the other side of a river.
// Score: 100%

module.exports = function solution(X, A) {
  var leaves = {};
  var consecutiveLeaves = 0;
  var earliestTime = -1;

  for(var i = 0; i < A.length; i++) {
    if(A[i] <= X && !leaves[A[i]]) {
      leaves[A[i]] = true;
      consecutiveLeaves += 1;
      if(consecutiveLeaves === X) {
        earliestTime = i;
        break;
      }
    }
  }
  
  return earliestTime;
};
