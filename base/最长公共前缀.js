// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

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
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))

// 执行用时	内存消耗	语言
// 112 ms	   35.1 MB	   javascript