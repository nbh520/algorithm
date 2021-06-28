// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  let arr = s.split('')
  let index = -1
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]].push(i)
    } else {
      obj[arr[i]] = [i]
    }
  }
  for (let item in obj) {
    if (obj[item].length == 1) {
      index = obj[item][0]
      break
    }
  }
  return index
};
console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))