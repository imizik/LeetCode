/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let hash = {};
    let count = 0;
    let maxCurr = 0;
    
    for (let right = 0; right < s.length; right++) {
        const rightChar = s[right]
        hash[rightChar] = 1 + (hash[rightChar] || 0)
        
        maxCurr = Math.max(maxCurr, hash[rightChar])
        
        if (right - left + 1 - maxCurr > k) {
            hash[s[left]]--
            left++
        }
        count = Math.max(count, right - left + 1)
    }
    return count
};