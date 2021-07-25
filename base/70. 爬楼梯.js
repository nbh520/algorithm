/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  if (n == 0) return 0
  let i = 0, now = 1, prev = 0
  while(n != i) {
    now += prev
    prev = now - prev
    i++
  }
  return now
};
// @lc code=end

console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))


// 执行用时：68 ms, 在所有 JavaScript 提交中击败了92.03%的用户
// 内存消耗：37.7 MB, 在所有 JavaScript 提交中击败了31.60%的用户

