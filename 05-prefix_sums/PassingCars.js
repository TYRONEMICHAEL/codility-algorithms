// PassingCars
// Count the number of passing cars on the road.
// Score: 100%

function solution(A) {
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

module.exports = (function () {
  var test = require('tape');

  test('PassingCars', function (t) {
    t.equal(solution([0,1,0,1,1]), 5);
    t.equal(solution([0,1,0,1,1,1]), 7);
    t.equal(solution([0,1,0,1,1,1,0,1]), 10);

    t.end();
  });

})();
