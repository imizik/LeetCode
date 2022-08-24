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
var maxDepth = function(root) {
    if (!root) return 0
    
    let depth = 0;
    
    const dfs = (node, height) => {
        if (!node) return
        depth = Math.max(height, depth)
        dfs(node.left, height +1)
        dfs(node.right, height+1)
    }
    dfs(root, 1)
    return depth
};