/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = {}
    
    for (let word of words) {
        map[word] ? map[word]++ : map[word] = 1
    }
    
    let sorted = Object.entries(map).sort((a,b) => {
        if (b[1] - a[1] === 0) return a[0].localeCompare(b[0])
        
        return b[1] - a[1]
    })
    
    let result = []
    
    for (let i = 0; i < k; i++) {
        result.push(sorted[i][0])
    }
    return result
};