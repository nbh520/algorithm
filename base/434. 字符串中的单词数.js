/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return (s.match(/[^a-zA-z]/g)).length
};

console.log(countSegments('Hello, my name is John'))

// 执行用时：72 ms, 在所有 JavaScript 提交中击败了63.81%的用户
// 内存消耗：37.6 MB, 在所有 JavaScript 提交中击败了52.61%的用户
