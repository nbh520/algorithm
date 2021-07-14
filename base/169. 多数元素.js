// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

//  

 // 使用count计数， 相等就加一，不相等减一， 最后剩下的就是
 /**
  * @param {number[]} nums
  * @return {number}
  */
  var majorityElement = function (nums) {
    let count = 0,
      value = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == value) {
        count++
      } else {
        count--
      }
      if (count < 0) {
        value = nums[i]
        count = 0
      }
    }
    return value
  };
  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
  console.log(majorityElement([3, 2, 3]))
 
 //  执行用时： 72 ms, 在所有 JavaScript 提交中击败了98 .28 % 的用户
 //  内存消耗： 39.5 MB, 在所有 JavaScript 提交中击败了99 .14 % 的用户