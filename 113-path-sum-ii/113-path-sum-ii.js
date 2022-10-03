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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];
    
    const dfs = (node, path, sum) => {
        if (!node) return
        
        sum += node.val
        path = [...path, node.val]

        if (!node.left && !node.right && sum === targetSum) {
            result.push(path)
            return
        }
        
        dfs(node.left, path, sum)
        dfs(node.right, path, sum)
        
    }
    
    dfs(root, [], 0)
    
    return result
};