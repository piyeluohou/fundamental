/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function (coins, amount) {
//   const coinTypes = coins.length;
//   const dp = new Array(coinTypes + 1).fill(0).map(() => {
//     return new Array(amount + 1).fill(0);
//   });

//   for (let i = 0; i <= coinTypes; i++) {
//     for (let j = 1; j <= amount; j++) {
//       if (i === 0) {
//         dp[0][j] = amount + 1;
//         continue;
//       }
//       if (coins[i - 1] > j) {
//         dp[i][j] = dp[i - 1][j];
//         continue;
//       }
//       dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i - 1]] + 1);
//     }
//   }
//   return dp[coinTypes][amount] === amount + 1 ? -1 : dp[coinTypes][amount];
// };

var coinChange = function (coins, amount) {
  const coinTypes = coins.length;
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 0; i < coinTypes; i++) {
    for (let j = 1; j <= amount; j++) {
      if (coins[i] <= j) {
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
      }
    }
  }
  console.log(dp);

  return dp[amount] === amount + 1 ? -1 : dp[amount];
};
const coins = [1, 2, 5],
  amount = 11;

const res = coinChange(coins, amount);
console.log(res);
