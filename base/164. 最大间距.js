/*
  给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。

  如果数组元素个数小于 2，则返回 0。

  示例 1:

  输入: [3,6,9,1]
  输出: 3
  解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
  示例 2:

  输入: [10]
  输出: 0
  解释: 数组元素个数小于 2，因此返回 0。

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) return 0
  for (var i = 0; i < nums.length - 1; i++) {
    //每一轮都和第一个比较
    for (var k = i + 1; k < nums.length; k++) {
      //谁小放前面
      if (nums[i] > nums[k]) {
        var temp = nums[i];
        nums[i] = nums[k];
        nums[k] = temp;
      }
    }
  }
  let index = 0
  let value = -1
  console.log(nums)
  for (let i = 1; i < nums.length; i++) {
    if ((nums[i] - nums[i - 1]) > value) {
      index = i - 1
      value = nums[i] - nums[i - 1]
    }
  }
  return value
};
console.log(maximumGap([3, 6, 9, 1]))
console.log(maximumGap([10, 10]))
console.log(maximumGap([1, 3, 100]))

// 执行用时： 272 ms, 在所有 JavaScript 提交中击败了12.82%的用户
// 内存消耗：39.5 MB, 在所有 JavaScript 提交中击败了28.69%的用户

