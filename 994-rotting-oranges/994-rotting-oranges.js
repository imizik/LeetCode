/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let oranges = 0;
    let queue = [];
    let time = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([i,j, 0])
            } else if (grid[i][j] === 1) oranges++
        }
    }
    
    const directions = [[0,1], [0,-1], [1,0], [-1,0]]
    while (queue.length > 0 && oranges) {
        const curr = queue.shift()
        if (grid[curr[0]][curr[1]] === 1) {
            grid[curr[0]][curr[1]] = 2
            oranges--
            time = curr[2]
        } 
        for (let direction of directions) {
            const newRow = curr[0] + direction[0]
            const newCol = curr[1] + direction[1]
            if (inBounds(grid, newRow, newCol ) && grid[newRow][newCol] === 1) {
                queue.push([newRow, newCol, curr[2]+1])
            }
        }

    }
    
    return oranges === 0 ? time : -1
    
};
    
const inBounds = function(grid, row, col) {
    if (row >=0 && col >=0 && row < grid.length && col < grid[0].length) {
        return true
    } else {
        return false
    }
}


