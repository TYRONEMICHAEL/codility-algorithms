// BinaryGap
// Find longest sequence of zeros in binary representation of an integer.
// Score: 100%

function solution(N) {
  var binary = N.toString(2);
  var maxGap = 0;
  var count = 0;
  var started = false;

  for(var i = 0; i < binary.length; i++) {
    var val = binary[i];
    if(val === '1') {
      if(!started) {
        started = true;
      } else {
        if(count > maxGap) {
          maxGap = count;
        }
        count = 0;
      }
    } else {
      if(started) {
        count += 1;
      }
    }
  }

  return maxGap;
};

module.exports = (function() {
  var test = require('tape');

  test('BinaryGap', function(t) {
    t.equal(solution(1041), 5);
    t.equal(solution(9), 2);
    t.equal(solution(20), 1);
    t.equal(solution(529), 4);
    t.equal(solution(15), 0);
    t.equal(solution(328), 2);
    t.end();
  });
})();
