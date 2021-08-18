
// 在无限的平面上，机器人最初位于 (0, 0) 处，面朝北方。机器人可以接受下列三条指令之一：

// "G"：直走 1 个单位
// "L"：左转 90 度
// "R"：右转 90 度
// 机器人按顺序执行指令 instructions，并一直重复它们。

// 只有在平面中存在环使得机器人永远无法离开时，返回 true。否则，返回 false。

/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
  var curr = 0 // 记录当前方向状态
 var x = y = curr = 0
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
 return (x == 0 && y == 0) || curr != 0
};