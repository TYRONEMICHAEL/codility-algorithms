// PassingCars
// Count the number of passing cars on the road.
// Score: 100%

module.exports = function solution(A) {
  var eastCars = 0;
  var pairs = 0;

  for(var i = 0; i < A.length; i++) {
    var val = A[i];

    if(pairs > 1000000000) {
      return -1;
    }

    if(val === 0) {
      eastCars += 1;
    } else {
      pairs += eastCars;
    }
  }

  return pairs;
};
