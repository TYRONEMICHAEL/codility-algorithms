// Triangle
// Determine whether a triangle can be built from a given set of edges.
// Score: 100%

function solution(A) {
  var len = A.length;

  A.sort(function (a, b) {
    return a - b;
  });

  if(A[len - 1] < 0) {
    return 0;
  }

  for(var i = 0; i < len; i++) {
    var a1 = A[i];

    for(var ii = i + 1; ii < len - 1; ii++) {
      var a2 = A[ii];
      var a3 = A[ii + 1];

      if(a2 + a3 > a1 && a1 + a3 > a2 && a1 + a2 > a3) {
        return 1;
      }
    }
  }

  return 0;
}

module.exports = (function () {
  var test = require('tape');

  test('Triangle', function (t) {
    t.equal(solution([10,2,5,1,8,20]), 1);
    t.equal(solution([10,50,5,1]), 0);
    t.end();
  });
})();
