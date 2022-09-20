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
var goodNodes = function(root) {
    let count = 0;
    
    let dfs = (node, min) => {
        if (!node) return
        
        if (node.val >= min) count++
        min = Math.max(min, node.val)
        
        dfs(node.left, min)
        dfs(node.right, min)

    }
    
    dfs(root, root.val)
    return count
};