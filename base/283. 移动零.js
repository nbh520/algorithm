// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      for (let j = i; j < nums.length; j++) {
        if (nums[j] !== 0) {
          nums[i] = nums[j]
          nums[j] = 0
          break
        }
      }
    }
  }
  return nums
};
console.log(moveZeroes([0,1,0,3,12]))

// 执行用时：84 ms, 在所有 JavaScript 提交中击败了78.36%的用户
// 内存消耗：39.2 MB, 在所有 JavaScript 提交中击败了85.00%的用户