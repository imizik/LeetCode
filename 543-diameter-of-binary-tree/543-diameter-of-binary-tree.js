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
var diameterOfBinaryTree = function(root) {
    let max = 0;
    
    let dfs = (node, height) => {
        if (!node) return 0
        
        let left = dfs(node.left, height + 1)
        let right = dfs(node.right, height + 1)
        max = Math.max(max, left + right)
        return Math.max(left, right) + 1
    }
    
    dfs(root, 0)
    return max
};