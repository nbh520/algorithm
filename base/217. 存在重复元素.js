// 给定一个整数数组，判断是否存在重复元素。

// 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

 

/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  var containsDuplicate = function(nums) {
//   let obj = {}
//   for (let i = 0 ; i < nums.length; i++) {
//     if (obj[nums[i]]) return true
//     obj[nums[i]] = 1
//   }
//   return false
// };
// 调用API 来解效率更高
var containsDuplicate = function(nums) {
  return nums.length > [...new Set([...nums])].length
};
// 执行用时：84 ms, 在所有 JavaScript 提交中击败了93.05%的用户
// 内存消耗：43.7 MB, 在所有 JavaScript 提交中击败了49.23%的用户
console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))