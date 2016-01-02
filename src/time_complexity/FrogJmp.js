// FrogJmp
// Count minimal number of jumps from position X to Y
// Score: 100%

module.exports = function solution(X, Y, D) {
  return Math.ceil((Y - X) / D);
};
