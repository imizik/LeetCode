/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {}
    let bucket = []
    let result = []
    for (let num of nums) {
        hash[num] ? hash[num]++ : hash[num] = 1;
    }
    
    for (let key in hash) {
        bucket[hash[key]] ? bucket[hash[key]].push(key) : bucket[hash[key]] = [key]  
    }
    console.log(bucket)
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) result.push(...bucket[i])
        if (result.length === k) break;
    }
    return result
};