/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = [[1]];
  for (let i = 1; i < numRows; i++) {
    const temArr = [];
    for (let j = 0; j <= i; j++) {
      temArr[j] = (res[i - 1][j - 1] || 0) + (res[i - 1][j] || 0);
    }
    res.push(temArr);
  }
  return res;
};

console.log(generate(5));
