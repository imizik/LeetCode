/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    
    let bfs = (r, c) => {
        let queue = [[r,c]]
        let directions = [[0,1], [0,-1], [1,0], [-1,0]]
        
        while (queue.length) {
            const [dR, dC] = queue.pop();
            grid[dR][dC] = '0' 

            for (let [nR, nC] of directions) {
                if (inBounds(dR + nR, dC + nC, grid)) {
                    if (grid[dR+nR][dC+nC] === '1') queue.push([dR+nR, dC+nC])
                }
            }
        }
        
    }
    
    for (let i = 0; i < grid.length;i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
              bfs(i, j)   
              count++
            }
        }
    }
    return count
};

var inBounds = function(row, col, grid) {
    return row >= 0 && col >=0 && row < grid.length && col < grid[0].length
}