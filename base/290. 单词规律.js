// 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。


// 思路： 两个分成数组， 创建对象obj， 两个数组对应key-value  创建数组每次添加进obj时，先判断是否唯一，不唯一直接false， 唯一就放入数组
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
  let patternArr = pattern.split('')
  let sArr = s.split(' ')
  let tempArr = []
  if (patternArr.length !== sArr.length) return false
  let obj = {}
  for (let i = 0; i < sArr.length; i++) {
    if (!obj[patternArr[i]]) {
      obj[patternArr[i]] = sArr[i]
      if (tempArr.includes(sArr[i])) return false
      tempArr.push(sArr[i])
    } else {
      if (obj[patternArr[i]] !== sArr[i]) {
        return false
      }
    }
  }
  return true
};

console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog cat cat fish'))
console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abba', "dog dog dog dog"))
console.log(wordPattern('abc', "b c a"))