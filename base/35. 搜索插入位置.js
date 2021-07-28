
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  if (nums[nums.length - 1] < target) {
      return nums.length
    }
    let i = 0
    for(i = 0; i < nums.length; i++) {
      if (nums[i] == target || nums[i] > target) {
        return i
      }
    }
    
  };