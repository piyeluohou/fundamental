/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const maxSqrt = Math.floor(Math.sqrt(n));
  const dp = Array(maxSqrt + 1)
    .fill(0)
    .map((item) => Array(n + 1).fill(0));
  for (let i = 0; i <= maxSqrt; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 0) {
        dp[0][j] = n + 1;
        continue;
      }
      if (j < i * i) {
        dp[i][j] = dp[i - 1][j];
        continue;
      }
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - i * i] + 1);
    }
  }

  return dp[maxSqrt][n];
};

console.log(numSquares(13));
