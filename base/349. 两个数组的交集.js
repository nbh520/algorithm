// 给定两个数组，编写一个函数来计算它们的交集。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
  let arr = []
  for(let i =0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])&& !arr.includes(nums1[i])) {
      arr.push(nums1[i])
    }
  }
  return arr
};

console.log(intersection([1,2,2,1], [2, 2]))
console.log(intersection([4,9,5], [9,4,9,8,4]))

// 执行用时：72 ms, 在所有 JavaScript 提交中击败了89.62%的用户
// 内存消耗：37.9 MB, 在所有 JavaScript 提交中击败了98.98%的用户