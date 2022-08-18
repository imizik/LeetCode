/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let res = 0;
    
    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[left])
            left++
        }
        set.add(s[i])
        res = Math.max(res, i - left + 1)
    }
    return res
};