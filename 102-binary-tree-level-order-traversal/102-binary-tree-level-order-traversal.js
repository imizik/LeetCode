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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    
    const dfs = (node, height) => {
        if (!node) return;
        
        result[height] ? result[height].push(node.val) : result[height] = [node.val];
        
        dfs(node.left, height + 1)
        dfs(node.right, height + 1)
    }
    
    dfs(root, 0)
    
    return result
};