/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function (s) {
  const arr = s.split(' ')
  const arr1 = []
  arr.forEach((item, index) => {
    arr1.push(item.match(/\d/g).join(''))
    arr[index] = arr[index].replace(/\d/g, '')
  })
  return arr1.reduce((p, c, index) => 
    p + arr[arr1.findIndex(data => data == index + 1)] + ' '
  , '').trim()
};

console.log(sortSentence("Myself2 Me1 I4 and3"))
// 执行用时：68 ms, 在所有 JavaScript 提交中击败了99.09%的用户
// 内存消耗：38 MB, 在所有 JavaScript 提交中击败了11.78%的用户