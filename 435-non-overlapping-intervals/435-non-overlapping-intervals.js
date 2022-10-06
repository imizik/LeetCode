/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let count = 0;
    intervals.sort((a,b) => a[1] - b[1])

    let range = [...intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        let int = intervals[i]
        if (int[0] <= range[0] || int[0] < range[1]) count++
        else range[1] = int[1]
    }
    return count
};