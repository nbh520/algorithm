// 在《英雄联盟》的世界中，有一个叫 “提莫” 的英雄，他的攻击可以让敌方英雄艾希（编者注：寒冰射手）进入中毒状态。现在，给出提莫对艾希的攻击时间序列和提莫攻击的中毒持续时间，你需要输出艾希的中毒状态总时长。

// 你可以认为提莫在给定的时间点进行攻击，并立即使艾希处于中毒状态。


/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let count = 0
  for(let i = 1; i < timeSeries.length; i++) {
    if (timeSeries[i] - timeSeries[i - 1] < duration) {
      count += timeSeries[i] - timeSeries[i - 1]
    } else {
      count += duration
    }
  }
  return count + duration
};
console.log(findPoisonedDuration([1, 4], 2))
console.log(findPoisonedDuration([1, 2], 2))
console.log(findPoisonedDuration([1, 2, 3], 2))
console.log(findPoisonedDuration([1, 2, 6, 9], 2))


// 执行用时：76 ms, 在所有 JavaScript 提交中击败了91.06%的用户
// 内存消耗：41.3 MB, 在所有 JavaScript 提交中击败了99.72%的用户