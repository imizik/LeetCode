/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {}
    
    for (let num of nums) {
        hash[num] ? hash[num]++ : hash[num] = 1;
    }
    
    let sorted = Object.entries(hash).sort((a,b) => {
        return b[1] - a[1]
    })
    console.log(hash)
    console.log(sorted)
    let result = []
    
    for (let i = 0; i < k; i++) {
        result.push(sorted[i][0])
    }
    return result
};