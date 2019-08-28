// 给你两个数组，arr1 和 arr2，
// arr2 中的元素各不相同
// arr2 中的每个元素都出现在 arr1 中
// 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
// 示例：
// 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// 输出：[2,2,2,1,4,3,3,9,6,7,19]
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let arr = []
  for (let i in arr2) {
    arr = arr.concat(arr1.filter(item => item === arr2[i]))
    arr1 = arr1.filter(item => item !== arr2[i])
  }
  arr.push(...arr1.sort((a, b) => a - b))
  return arr
};
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))

// 执行用时 :104 ms, 在所有 JavaScript 提交中击败了21.01%的用户
// 内存消耗 :37.2 MB, 在所有 JavaScript 提交中击败了100.00%的用户