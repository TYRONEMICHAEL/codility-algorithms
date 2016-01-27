// Fish
// Score: 100%

function solution(A, B) {
  var fish = [];
  var len = A.length;
  var count = len;

  for (var i = 0; i < len; i++) {
    var direction = B[i] === 1 ? 'down' : 'up';
    var f = A[i];

    if(direction === 'down') {
      fish.push(f);
    } else {
      for(var j = fish.length - 1; j >= 0; j--) {
        var prevFish = fish[j];
        if(prevFish > f) {
          count--;
          break;
        } else if(prevFish < f) {
          count--;
          fish.pop();
        }
      }
    }
  }

  return count;
}

module.exports = (function () {
  var test = require('tape');

  test('Brackets', function (t) {
    t.equal(solution([4,3,2,1,5], [0,1,0,0,0]), 2);
    t.equal(solution([0,1], [1,1]), 2);
    t.equal(solution([0], [1]), 1);
    t.end();
  });
})();
