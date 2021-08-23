// 写一个程序，输出从 1 到 n 数字的字符串表示。

// 1. 如果 n 是3的倍数，输出“Fizz”；

// 2. 如果 n 是5的倍数，输出“Buzz”；

// 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let arr = []
  for(let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz')
      continue
    }
    if (i % 3 === 0) {
      arr.push('Fizz')
      continue
    }
    if (i % 5 === 0) {
      arr.push('Buzz')
      continue
    }
    arr.push(i.toString())
  }
  return arr
};
console.log(fizzBuzz(15))

// 执行用时：80 ms, 在所有 JavaScript 提交中击败了73.09%的用户
// 内存消耗：39.9 MB, 在所有 JavaScript 提交中击败了64.12%的用户