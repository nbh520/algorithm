
// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 说明：本题中，我们将空字符串定义为有效的回文串。

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  if (s.length === 0) return true
  let str = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ' && /[A-Za-z0-9]+$/.test(s[i])) str+= s[i].toLocaleLowerCase()
  }
  let bol = true
  for (let i = 0; i < str.length; i++) {
   if (str[i] !== str[str.length - i - 1]) bol = false
  }
  return bol
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))