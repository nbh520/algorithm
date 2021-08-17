/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  let arr = []
  for (let i = 1; i < numRows + 1; i++) {
    let arr1 = []
    for (let j = 0; j < i; j++) {
      if (j == 0){ 
        arr1.push(1)
        continue
      }
      if (j == (i - 1)) {
        arr1.push(1)
        continue
      }
      // console.log(arr)
      arr1.push(arr[i - 2][j - 1]+ arr[i - 2][j])
    }
    arr.push(arr1)
  }
  return arr
};

// 执行用时：68 ms, 在所有 JavaScript 提交中击败了81.93%的用户
// 内存消耗：37.6 MB, 在所有 JavaScript 提交中击败了80.56%的用户