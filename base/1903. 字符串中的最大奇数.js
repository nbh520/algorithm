/**
 * @param {string} num
 * @return {string}
 */
 var largestOddNumber = function (num) {
  const len = num.length
  for (let i = len; i--; i > 0) {
    if (num[i] % 2 != 0) {
      return num.slice(0, i + 1)
    }
  }
  return ''
};

console.log(largestOddNumber('52'))
console.log(largestOddNumber('4206'))
console.log(largestOddNumber('35427'))


// 执行用时：80 ms, 在所有 JavaScript 提交中击败了88.21%的用户
// 内存消耗：41.5 MB, 在所有 JavaScript 提交中击败了95.44%的用户