// NumberOfDiscIntersections
// Compute the number of intersections in a sequence of discs.
// Score: 100%

function solution(A) {
  var len = A.length;
  var totalIntersections = 0;
  var circles = [];

  for(var i = 0; i < len; i++) {
    var right = A[i] + i;
    var left = i - A[i] < 0 ? 0 : i - A[i];
    circles.push({ right: right, left: left });
  }

  circles.sort(function (p, n, i) {
    return n.right - p.right;
  });

  for(var ii = 0; ii < len; ii++) {
    var circle = circles[ii];

    for(var iii = ii + 1; iii < len; iii++) {
      var nextCircle = circles[iii];
      if(nextCircle.right >= circle.left) {
        totalIntersections += 1;
        if(totalIntersections > 10000000) {
          return -1;
        }
      } else {
        break;
      }
    }
  }

  return totalIntersections;
};

module.exports = (function () {
  var test = require('tape');


  test('NumberOfDiscIntersections', function (t) {
    t.equal(solution([1,5,2,1,4,0]), 11);
    t.equal(solution([1,1,1]), 3);
    t.end();
  });
})();
