/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    if(!rooms || rooms.length === 0) return;
    let queue = [];
    const directions = [[1,0], [-1,0], [0,1], [0,-1]]
        
    for (let i = 0; i < rooms.length; i++) {
        for (let j = 0; j < rooms[0].length; j++) {
            const curr = rooms[i][j]
            
            if (curr === 0) queue.push([i, j])
        }
    }
    
    while(queue.length) {
        let [row, col] = queue.shift();
        
        for (let [xR, xC] of directions) {
            const nRow = row + xR;
            const nCol = col + xC;
            
            if (!inBounds(nRow, nCol, rooms) || rooms[nRow][nCol] !== 2147483647) continue;
            
            rooms[nRow][nCol] = rooms[row][col] + 1
            queue.push([nRow,nCol])
        }
    }
    
};

const inBounds = (row, col, rooms) => {
    return row >= 0 && row < rooms.length && col >= 0 && col < rooms[0].length
}