/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    let hash = {}
    let currMax = [];
    let tracker = 0;
    
    const dfs = (node) => {
        if (!node) return 0;
        
        let left = dfs(node.left)
        let right = dfs(node.right)
        
        let sum = left + right + node.val
        
        hash[sum] ? hash[sum]++ : hash[sum] = 1
        if (!currMax[0] || hash[sum] === tracker) currMax.push(sum)

        if (hash[sum] > tracker) tracker = hash[sum], currMax = [sum]
        
        
        
        return sum
    }
    
    dfs(root)
    
    return currMax
};