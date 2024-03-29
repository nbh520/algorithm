// 实现 int sqrt(int x) 函数。

// 计算并返回 x 的平方根，其中 x 是非负整数。

// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
  if(x === 1) return x;
  let i = 0;
  while (i <= Math.floor(x / 2)){
      if (i * i > x) {
          return i - 1;
      }
      i++;
  }
  return i - 1;
};