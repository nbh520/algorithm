

// 给你一个整数数组 nums 。数组中唯一元素是那些只出现 恰好一次 的元素。

// 请你返回 nums 中唯一元素的 和 。

 
/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function (nums) {
  let arr = []
  nums.forEach(item => {
    nums.filter(data => data == item).length > 1 ? '' : arr.push(item)
  })
  return arr.reduce((p, c) => p + c, 0)
};
console.log(sumOfUnique([1, 2, 3, 2]))
console.log(sumOfUnique([1, 1, 1, 1, 1]))
console.log(sumOfUnique([1, 2, 3, 4, 5]))



// 执行用时：76 ms, 在所有 JavaScript 提交中击败了93.29%的用户
// 内存消耗：39.1 MB, 在所有 JavaScript 提交中击败了21.08%的用户