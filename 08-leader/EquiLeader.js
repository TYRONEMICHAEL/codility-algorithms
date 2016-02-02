// EquiLeader
// Find the index S such that the leaders of the sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1] are the same.
// Score: 100%

function solution(A) {
  var len = A.length;
  var value;
  var size = 0;
  var count = 0;
  var numLeaders = 0;
  var cntLeaders = 0;

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
    }
  }

  value = count > (len / 2) ? value : -1;

  if(value === -1) {
    return numLeaders;
  }

  for(var iii = 0; iii < len; iii++) {
    if(A[iii] === value) {
      cntLeaders++;
    }

    if(cntLeaders > (iii + 1) / 2 && count - cntLeaders > (len - (iii + 1)) / 2) {
      numLeaders++;
    }
  }

  return numLeaders;
}

module.exports = (function () {
  var test = require('tape');

  test('EquiLeader', function (t) {
    t.equal(solution([4,3,4,4,4,2]), 2);
    t.equal(solution([0,0]), 1);
    t.equal(solution([0,1]), 0);
    t.equal(solution([4, 4, 2, 5, 3, 4, 4, 4]), 3);
    t.end();
  });
})();
