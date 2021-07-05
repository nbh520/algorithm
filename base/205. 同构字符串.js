// 给定两个字符串 s 和 t，判断它们是否是同构的。

// 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

// 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false
  let obj = {}
  let obj1 = {}
  for (let i = 0 ; i < s.length; i++) {
    if (obj[s[i]]) {
      if (obj[s[i]] !== t[i]) return false
    } else {      
      obj[s[i]] = t[i]
    }
    if (obj1[t[i]]) {
      if (obj1[t[i]] !== s[i]) return false
    } else {      
      obj1[t[i]] = s[i]
    }
  }
  return true
};
console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic('badc', 'baba'))