// 给你一个字符串 s，由若干单词组成，单词之间用单个或多个连续的空格字符隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0 。

// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

//  

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  if (s == null) {
    return 0
  }
  let str = s.trim()
  if (str == '') {
    return 0
  }
  const arr = str.split(' ')
  return arr[arr.length - 1].length
};