// 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为汉明重量）。
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function (n) {
  console.log(n.toString(2).split(''))
  return n.toString(2).split('').reduce(function (prev, curr) {
    return Number(prev) + Number(curr);
  })
};
console.log(hammingWeight(00000000000000000000000010000000))

