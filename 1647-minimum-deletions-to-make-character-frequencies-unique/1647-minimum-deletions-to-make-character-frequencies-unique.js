/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let hash = {}
    for (let char of s) {
        hash[char] = (hash[char] || 0) + 1
    }
    
    let set = new Set()
    let count = 0

    for (let key in hash) {
        let num = hash[key]
        while(set.has(num) && num >0) {
            num = num - 1
            count++
        }
        console.log(num)
        set.add(num)
    }
    return count
};