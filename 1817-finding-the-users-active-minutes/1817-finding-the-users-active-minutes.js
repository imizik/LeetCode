/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    let set = new Set();
    let hash = {};
    
    let result = Array(k).fill(0)
    
    for (let [id, time] of logs) {
        const key = id + ',' + time;
        if (!set.has(key)) {
            set.add(key);
            if (!hash[id]) hash[id] = [];
            hash[id].push(time);
        }
    }
    
    for (let key in hash) {
        result[hash[key].length - 1]++ 
    }
    return result
};