// MinAvgTwoSlice
// Find the minimal average of any slice containing at least two elements.
// Score: 100%

module.exports = function solution(A) {
  var index = 0;
  var minAvg = (A[0] + A[1]) / 2;

  for(var i = 0; i < A.length - 2; i++) {
    var doubleSlice = (A[i] + A[i + 1]) / 2;
    var tripleSlice = (A[i] + A[i + 1] + A[i + 2]) / 3;
    var sliceAvg = doubleSlice > tripleSlice ? tripleSlice : doubleSlice;

    if(sliceAvg < minAvg) {
      minAvg = sliceAvg;
      index = i;
    }
  }

  if(((A[A.length - 2] + A[A.length - 1]) / 2) < minAvg) {
    index = A.length - 2;
  }

  return index;
};
