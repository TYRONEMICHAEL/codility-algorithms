// NumberOfDiscIntersections
// Compute the number of intersections in a sequence of discs.
// Score: 100%

module.exports = function solution(A) {
  var len =  A.length;
  var totalIntersections = 0;
  var circles = [];

  for(var i = 0; i < len; i++) {
    var right = A[i] + i;
    var left = i - A[i];
    circles.push([left, right]);
  }

  circles.sort(function (p, n, i) {
    return p[0] - n[0];
  });

  for(var ii = 0; ii < len; ii++) {
    var circle = circles[ii];
    for(var iii = ii + 1; iii < len; iii++) {
      var nextCircle = circles[iii];
      if(nextCircle[0] <= circle[1]) {
        totalIntersections += 1;
        if (totalIntersections > 10000000) {
          return -1;
        }
      } else {
        break;
      }
    }
  }

  return totalIntersections;
};
