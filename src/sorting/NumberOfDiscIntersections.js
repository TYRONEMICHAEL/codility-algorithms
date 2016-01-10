// NumberOfDiscIntersections
// Compute the number of intersections in a sequence of discs.
// Score: 100%

module.exports = function solution(A) {
  var totalIntersections = 0;
  var circles = [];

  for(var i = 0; i < A.length; i++) {
    var right = A[i] + i;
    var left = i - A[i] < 0 ? 0 : i - A[i];
    circles.push({ right: right, left: left });
  }

  var sortedCircles = circles.sort(function (p, n, i) {
    return n.right - p.right;
  });

  for(var ii = 0; ii < sortedCircles.length - 1; ii++) {
    var circle = sortedCircles[ii];
    
    for(var iii = 1; iii <= sortedCircles.length - (ii + 1); iii++) {
      var nextCircle = sortedCircles[iii + ii];
      if((circle.left <= nextCircle.left) || nextCircle.right >= circle.left) {
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
