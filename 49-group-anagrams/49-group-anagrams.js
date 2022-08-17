/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let storage = {};
    
    for (let str of strs) {
        const sorted = str.split("").sort().join("");
        storage[sorted] ? storage[sorted].push(str) : storage[sorted] = [str]
    }
    
    return Object.values(storage)
    
};