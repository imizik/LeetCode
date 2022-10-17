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
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0
    let min = Infinity
    
    const dfs = (node, height) => {
        if (!node) {
            return 0
        }
        
        let left = dfs(node.left, height + 1)
        let right = dfs(node.right, height + 1)
        
        if (left === 0 && right === 0) {
            min = Math.min(min, height)
        }
    }
    
    dfs(root, 1)
    
    return min
};