/**
 * @param {number} num
 * @return {number}
 */
 var maximum69Number = function (num) {
  if (num.toString().indexOf('6') === -1) return num
  let arr = num.toString().split('')
  arr[num.toString().indexOf('6')] = 9
  return Number(arr.join(''))
};
console.log(maximum69Number(69))
console.log(maximum69Number(996))
console.log(maximum69Number(6969))
console.log(maximum69Number(969))
console.log(maximum69Number(696))
console.log(maximum69Number(999))

// 执行用时： 68 ms, 在所有 JavaScript 提交中击败了98 .89 % 的用户
// 内存消耗： 38.1 MB, 在所有 JavaScript 提交中击败了13 .33 % 的用户