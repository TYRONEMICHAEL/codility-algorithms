// MaxDoubleSliceSum
// Find the maximal sum of any double slice.
// Score: 100%

function solution(A) {
  var len = A.length;
  var left = [0]
  var right = [0];
  var max = 0;


  for(var i = 1; i < len; i++) {
    left[i] = 0;
    right[i] = 0;

    left[i] = Math.max(left[i - 1] + A[i], 0);
  }

  for(var i = len - 2; i > 0; i--) {
    right[i] = Math.max(right[i + 1] + A[i], 0);
  }

  console.log(left, right);

  for(var i = 1; i < len - 1; i++) {
    console.log(left[i-1], right[i+1], max);
    max = Math.max(left[i-1] + right[i+1],max);
  }



  return max;
}

module.exports = (function () {
  var test = require('tape');

  test('MaxDoubleSliceSum', function (t) {
    t.equal(solution([3,2,6,-1,4,5,-1,2]), 17);
    t.end();
  });
})();
