/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp0 = 0,
    dp1 = nums[0];
  for (let i = 2; i <= nums.length; i++) {
    const tem = dp1;
    dp1 = Math.max(nums[i - 1] + dp0, tem);
    dp0 = tem;
  }
  return dp1;
};

const nums = [2, 7, 9, 3, 1];
console.log(rob(nums));
