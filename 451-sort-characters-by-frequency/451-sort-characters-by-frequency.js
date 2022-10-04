/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let hash = {}
    
    for (let char of s) {
        hash[char] = (hash[char] || 0) + 1
    }
    let sorted = Object.entries(hash).sort((a,b) => b[1] - a[1])
    
    let result = ""
    
    for (let obj of sorted) {
        for (let i = 0; i < obj[1]; i++) {
            result += obj[0]
        }
    }
    
    return result
};