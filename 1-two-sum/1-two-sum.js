/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
    
    for (let i = 0; i < nums.length;i++) {
        const complement = target - nums[i]
        if (hash[complement] >= 0) return [i, hash[complement]]
        hash[nums[i]] = i
    }
};