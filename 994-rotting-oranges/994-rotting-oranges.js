/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let min = 0;
    let oranges = 0;
    let queue = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) oranges++
            if (grid[i][j] === 2) queue.push([i,j])
        }
    }
    
    while(queue.length) {
        let directions = [[1,0], [0,1], [-1,0], [0,-1]]
        
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let [row, col] = queue.shift()
            for (let [r,c] of directions) {
                let newR = row + r
                let newC = col + c
                if (inBounds(newR, newC, grid) && grid[newR][newC] === 1) {
                    grid[newR][newC] = 2
                    queue.push([newR, newC]);
                    oranges--
                }
            }
        }
        if (queue.length > 0) min++
    }
    
    return oranges === 0 ? min : -1
    
};

function inBounds(row, col, grid) {
    return row >= 0 && col >= 0 && row < grid.length && col < grid[0].length
}