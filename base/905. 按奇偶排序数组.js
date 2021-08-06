// 给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。

// 你可以返回满足此条件的任何数组作为答案。

 
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let arr1 = [];
  let arr2 = [];
  A.forEach(item => {
    if (item % 2 === 0) {
      arr1.push(item)
    } else {
      arr2.push(item)
    }
  })

  return arr1.concat(arr2)
}