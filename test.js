/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var temp
    for (var i = 0; i < s.length / 2; i++) {
    	temp = s[i]
    	s[i] = s[s.length - i - 1]
    	s[s.length - i - 1] = temp
    }
    return s
    // reverseString(s)
};
console.log(reverseString(["H","a","n","n","a","h"]))
