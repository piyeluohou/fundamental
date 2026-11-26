const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const nums = [1, 343, 65, 232, 5654, 76, 34, 4];
const res = bubbleSort(nums);
console.log(res);
