
// 给定一个单词，你需要判断单词的大写使用是否正确。

// 我们定义，在以下情况时，单词的大写用法是正确的：

// 全部字母都是大写，比如"USA"。
// 单词中所有字母都不是大写，比如"leetcode"。
// 如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
// 否则，我们定义这个单词没有正确使用大写字母。

/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
  let total = 0
  for (let i = 0; i < word.length; i++) {
    if (/[A-Z]/.test(word[i])) {
      total++
    } 
  }
  if (total === 1 && /[A-Z]/.test(word[0])) return true
  if (total === word.length) return true
  if (total === 0) return true
  return false
};
console.log(detectCapitalUse('Google'))
console.log(detectCapitalUse('leetcode'))
console.log(detectCapitalUse('USA'))
console.log(detectCapitalUse('FalSe'))
console.log(detectCapitalUse('mL'))
// 执行用时：80 ms, 在所有 JavaScript 提交中击败了94.68%的用户
// 内存消耗：39.2 MB, 在所有 JavaScript 提交中击败了55.32%的用户