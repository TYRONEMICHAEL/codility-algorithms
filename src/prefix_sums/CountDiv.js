// CountDiv
// Compute number of integers divisible by k in range [a..b].
// Score: 100%

module.exports = function solution(A, B, K) {
  if(A % K === 0) {
    return Math.floor((B - A) / K) + 1;
  }
  return Math.floor((B - (A - A % K)) / K);
};
