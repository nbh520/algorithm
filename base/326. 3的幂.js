// 给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。

// 整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3x


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  let bol = false
  if (n === 1) return true
  if (n / 3 > (n / 3 | 0) || n <= 0) {
      return false
  } 
  if (n / 3 === 3) {
      return true
  } else {
      bol = isPowerOfThree(n / 3)
  }
  
  return bol
};