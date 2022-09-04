/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let x = 0, y =0
    let index = 0
    const directions = [[0,1], [1,0], [0,-1], [-1,0]]
    
    for (let inst of instructions) {
        if (inst === 'L') {
            index = (index + 3) % 4
        } else if (inst === 'R') {
            index = (index + 1) % 4
        } else {
            x += directions[index][0]
            y += directions[index][1]
        }
    }
    return (x === 0 && y === 0) || index !== 0
};