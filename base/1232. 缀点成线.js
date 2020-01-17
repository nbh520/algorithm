// 在一个 XY 坐标系中有一些点，我们用数组 coordinates 来分别记录它们的坐标，其中 coordinates[i] = [x, y] 表示横坐标为 x、纵坐标为 y 的点。

// 请你来判断，这些点是否在该坐标系中属于同一条直线上，是则返回 true，否则请返回 false。

// 输入：coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// 输出：true

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let k = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0])
  for (let i = 2; i < coordinates.length; i++) {
    let k2 = (coordinates[i][1] - coordinates[i - 1][1]) / (coordinates[i][0] - coordinates[i - 1][0])
    if (k !== k2) return false
  }
  return true
};

console.log(checkStraightLine([
  [1, 1],
  [2, 2],
  [3, 4],
  [4, 5],
  [5, 6],
  [7, 7]
]))
console.log(checkStraightLine([
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7]
]))

// 执行用时 :64 ms, 在所有 JavaScript 提交中击败了78.37%的用户
// 内存消耗 :34.5 MB, 在所有 JavaScript 提交中击败了40.00%的用户