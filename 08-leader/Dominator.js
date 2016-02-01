// Dominator
// Find an index of an array such that its value occurs at more than half of indices in the array.
// Score: 100%

function solution(A) {
  var len = A.length;
  var value;
  var size = 0;
  var count = 0;
  var index = -1;

  for(var i = 0; i < len; i++) {
    if(size === 0) {
      size ++;
      value = A[i];
    } else {
      if(A[i] === value) {
        size ++;
      } else {
        size --;
      }
    }
  }

  for(var ii = 0; ii < len; ii++) {
    if(A[ii] === value) {
      count++;
      index = ii;
    }
  }

  return count > (len / 2) ? index : -1;
}

module.exports = (function () {
  var test = require('tape');

  test('Dominator', function (t) {
    t.equal(solution([3,4,3,2,3,-1,3,3]), 7);
    t.equal(solution([]), -1);
    t.equal(solution([4]), 0);
    t.equal(solution([2, 1, 1, 3]), -1);
    t.end();
  });
})();
