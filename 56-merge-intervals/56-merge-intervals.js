/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    
    let result = [intervals[0]];
    
    for (let [start, end] of intervals) {
        let prev = result[result.length-1]
        
        if (start <= prev[1]) {
            prev[1] = Math.max(end, prev[1])
        } else {
            result.push([start, end])
        }
    }
    return result
};