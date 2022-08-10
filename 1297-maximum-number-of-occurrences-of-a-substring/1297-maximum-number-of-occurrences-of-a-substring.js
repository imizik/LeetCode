/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
    let hash = {};
    let max = 0;
    
    for (let i = 0; i <= s.length - minSize; i++) {
        let letters = {};
        
        const subStr = s.substring(i, i+ minSize )
        for (let char of subStr) {
            letters[char] = (letters[char] || 0) + 1;
        }
        if (Object.keys(letters).length > maxLetters) continue;
        hash[subStr] = (hash[subStr] || 0) + 1
        max = Math.max(max, hash[subStr])
    }
    return max
};