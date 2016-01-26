// Brackets
// Score: 100%

function solution(S) {
  var stack = [];
  var brackets = {
    '}': '{',
    ')': '(',
    ']': '['
  };

  for(var i = 0; i < S.length; i++) {
    var bracket = S[i];

    if(brackets[bracket]) {

      if(stack.pop() !== brackets[bracket]) {
        return 0;
      }

    } else {
      stack.push(bracket);
    }
  }

  return stack.length === 0 ? 1 : 0;
}

module.exports = (function () {
  var test = require('tape');

  test('Brackets', function (t) {
    t.equal(solution('{[()()]}'), 1);
    t.equal(solution('([)()]'), 0);
    t.equal(solution(''), 1);
    t.end();
  });
})();
