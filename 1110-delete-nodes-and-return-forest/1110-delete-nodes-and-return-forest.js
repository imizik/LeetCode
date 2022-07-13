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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    let results = [];
    let deleteSet = new Set(to_delete)
    
    const dfs = (node, valid) => {
        if (!node) return null;
        
        const isDelete = deleteSet.has(node.val)
        if (valid && !isDelete) results.push(node)
        node.left = dfs(node.left, isDelete);
        node.right = dfs(node.right, isDelete);
        return isDelete?null:node;
        
    }
    dfs(root, true)
    return results
    
};

