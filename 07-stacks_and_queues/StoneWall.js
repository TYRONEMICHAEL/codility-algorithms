// Nesting
// Score: 100%

function solution(H) {
  var len = H.length;
  var numBlocks = 1;
  var stack = [H[0]];

  for (var i = 1; i < len; i++) {
    var currentHeight = H[i];

    for(var j = stack.length - 1; j >= 0; j--) {
      var previousBlock = stack[j];

      if(previousBlock < currentHeight) {
        break;
      }

      if(previousBlock === currentHeight) {
        numBlocks--;
      }

      stack.pop();
    }

    stack.push(currentHeight);
    numBlocks++;
  }

  return numBlocks;
}

module.exports = (function () {
  var test = require('tape');

  test('Nesting', function (t) {
    t.equal(solution([8,8,5,7,9,8,7,4,8]), 7);
    t.equal(solution([1,5,7,9,7,5,7]), 5);
    t.end();
  });
})();
