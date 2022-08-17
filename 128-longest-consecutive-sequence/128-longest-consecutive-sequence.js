/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let maxLength = 0;
    
    for (let num of nums) {
        if (!set.has(num - 1)) {
            let length = 1;
            while (set.has(num + length)) {
                length++
            }
            maxLength = Math.max(maxLength, length)
        }
    }
    return maxLength
    
    
};