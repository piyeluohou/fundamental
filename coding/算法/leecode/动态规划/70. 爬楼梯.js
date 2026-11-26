/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;
  let dp1 = 1,
    dp2 = 2;
  for (let i = 2; i <= n; i++) {
    const tem = dp1;
    dp1 = dp2;
    dp2 = tem + dp1;
  }
  return dp1;
};
118