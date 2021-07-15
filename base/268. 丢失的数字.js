
// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。

 
/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  let total = 0
  for (let i = 0; i < nums.length; i++) {
    total += nums[i]
  }
  return (1 + nums.length) * nums.length / 2 - total
};
console.log(missingNumber([3,0,1]))
console.log(missingNumber([0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
console.log(missingNumber([0]))

// 执行用时：92 ms, 在所有 JavaScript 提交中击败了72.26%的用户
// 内存消耗：40 MB, 在所有 JavaScript 提交中击败了85.46%的用户