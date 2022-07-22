/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = {}
    let cols = {}
    let squares = {}
    
    for (let i = 0; i < board.length; i++) {
        rows = {}
        for (let j = 0; j < board[0].length; j++) {
            const curr = board[i][j]
            if (rows[curr] && curr !== '.') {
              return false  
            } else {
                rows[curr] = 1
            }
            
            if (!cols[j]) cols[j] = {}
            if (cols[j][curr] && curr !== '.') {
              return false  
            } else {
                cols[j][curr] = 1
            }
            
            const check = squareCheck(i, j)
            if (!squares[check]) squares[check] = {}
            if (squares[check][curr] && curr !== '.') {
              return false  
            } else {
                squares[check][curr] = 1
            }
        }
    }
    return true
};

const squareCheck = (row, col) => {
    return Math.floor(row / 3).toString() + Math.floor(col/3).toString() 
}
