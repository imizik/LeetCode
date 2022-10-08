/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = {}
    
    for (let num of nums) {
        console.log(hash[num], num)
        if (hash[num]) return true
        hash[num] = true
    }
    
    return false
};