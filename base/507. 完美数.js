// 对于一个 正整数，如果它和除了它自身以外的所有 正因子 之和相等，我们称它为 「完美数」。

// 给定一个 整数 n， 如果是完美数，返回 true，否则返回 false

/**
 * @param {number} num
 * @return {boolean}
 */
 var checkPerfectNumber = function (num) {
  if (num <= 1) return false
  let length = num / 2 + 1
  let addNum = 0
  for (let i = 1; i < length; i++) {
    if (num % i === 0) {
      addNum+= i
    }
  }
  return addNum === num
};
console.log(checkPerfectNumber(28))
console.log(checkPerfectNumber(6))
console.log(checkPerfectNumber(496))
console.log(checkPerfectNumber(8128))
console.log(checkPerfectNumber(2))