// BinaryGap
// Find longest sequence of zeros in binary representation of an integer.
// Score: 100% https://codility.com/demo/results/training8MWRRC-ESS/

module.exports = function solution(N) {
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
