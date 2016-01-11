// PermCheck
// Check whether array A is a permutation
// Score: 100%

function solution(A) {
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
  }

  return count === arrLength ? 1 : 0;
};

module.exports = (function () {
  var test = require('tape');

  test('PermCheck', function (t) {
    t.equal(solution([4,1,3,2]), 1);
    t.equal(solution([4,1,3]), 0);
    t.equal(solution([1,4,1]), 0);
    t.end();
  });
})();
