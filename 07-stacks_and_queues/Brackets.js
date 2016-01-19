// Distinct
// Compute number of distinct values in an array.
// Score: 100%

function solution(S) {
  var isClean;
  var stack = [];
  var brackets = {
    '}': '{',
    ')': '(',
    ']': '['
  };

  if(brackets[S[0]] || !brackets[S[S.length - 1]]) {
    return 0;
  }

  for(var i = 0; i < S.length; i++) {
    var bracket = S[i];

    if(brackets[bracket]) {
      isClean = (stack.pop() === 0);
    } else {
      stack.push(bracket);
    }
  }

  console.log(stack);

  return stack.length === 0 ? 1 : 0;
}

module.exports = (function () {
  var test = require('tape');

  test('Brackets', function (t) {
    t.equal(solution('{[()()]}'), 1);
    t.equal(solution('([)()]'), 0);
    t.end();
  });
})();
