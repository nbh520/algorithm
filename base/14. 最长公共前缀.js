

// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

 

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''
if (strs.length === 1) return strs[0]
let strOne = strs[0]
let strArr = []
let is = false
for(let i in strOne) {
  for(let j = 1; j < strs.length; j++){
      if (strs[j][i] !== strOne[i]) {
          is = true
          break;
      }
  }
  if (is) {
      break;
  } else {
      strArr.push(strOne[i])
  }
}
if (strArr.length === 0) return ''
return strArr.join('')    
};