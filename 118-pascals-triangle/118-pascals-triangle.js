/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = []
    
    for (let i = 0; i < numRows; i++) {
        let toPush = []
        
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                toPush.push(1)
            } else {
                toPush.push(result[i-1][j-1] + result[i-1][j])
            }
        }
        result.push(toPush)
    }
    
    return result
};

