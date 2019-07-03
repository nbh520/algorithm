// 在无限的平面上，机器人最初位于 (0, 0) 处，面朝北方。机器人可以接受下列三条指令之一：

// "G"：直走 1 个单位
// "L"：左转 90 度
// "R"：右转 90 度
// 机器人按顺序执行指令 instructions，并一直重复它们。

// 只有在平面中存在环使得机器人永远无法离开时，返回 true。否则，返回 false。
// 示例 1：

// 输入："GGLLGG"
// 输出：true
// 解释：
// 机器人从 (0,0) 移动到 (0,2)，转 180 度，然后回到 (0,0)。
// 重复这些指令，机器人将保持在以原点为中心，2 为半径的环中进行移动。
// 示例 2：

// 输入："GG"
// 输出：false
// 解释：
// 机器人无限向北移动。
// 示例 3：

// 输入："GL"
// 输出：true
// 解释：
// 机器人按 (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ... 进行移动。

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    // curr 0, 1, 2, 3 北 东 南 西
    var curr = 0 // 记录当前方向状态
    var x = y = 0
    for(let i of instructions) {
        if (i === 'R') 
        	curr == 3 ? curr = 0 : curr += 1
        if (i === 'L')
        	curr == 0 ? curr = 3 : curr -= 1
        if (i == 'G') {
        	switch (curr) {
        		case 0:
        			y += 1
        			break
        		case 1:
        			x += 1
        			break
        		case 2:
        			y -= 1
        			break
        		case 3:
        			x -= 1
        			break
        	}
        }
    }
    return (x == 0 && y == 0) || curr != 0  // 只要不是在原点或最后不是面朝北方都能绕回原点
};
console.log(isRobotBounded('GGLLGG'))
console.log(isRobotBounded('GG'))
console.log(isRobotBounded('GL'))


// 执行用时 :72 ms, 在所有 JavaScript 提交中击败了 98.15% 的用户
// 内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户