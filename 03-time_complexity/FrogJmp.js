// FrogJmp
// Count minimal number of jumps from position X to Y
// Score: 100%

function solution(X, Y, D) {
  return Math.ceil((Y - X) / D);
};

module.exports = (function () {
  var test = require('tape');

  test('FrogJmp', function (t) {
    t.equal(solution(10,85,30), 3);
    t.end();
  });
})();
