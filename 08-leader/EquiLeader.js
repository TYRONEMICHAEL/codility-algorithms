// EquiLeader
// Find the index S such that the leaders of the sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1] are the same.
// Score: 100%

function solution(A) {
  var len = A.length;
  var value;
  var size = 0;
  var numLeaders = 0;
  var equiLeaderIndexes = [];

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
      equiLeaderIndexes.push(ii);
    }
  }

  console.log(equiLeaderIndexes);

  for(var iii = 0; iii < equiLeaderIndexes.length; iii++) {
    var index = equiLeaderIndexes[iii] + 1;
    var prev = A.slice(0, index);
    var next = A.slice(index, len);

    console.log(iii, prev, next);

  }

  return numLeaders;
}

module.exports = (function () {
  var test = require('tape');

  test('EquiLeader', function (t) {
    t.equal(solution([4,3,4,4,4,2]), 2);
    // t.equal(solution([4, 4, 2, 5, 3, 4, 4, 4]), 3);
    // t.equal(solution([]), 0);
    // t.equal(solution([0,0]), 1);
    t.end();
  });
})();
