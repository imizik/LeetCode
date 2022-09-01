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
var zigzagLevelOrder = function(root) {
    let result = [];
    // let order = 2;
    
    const dfs = (node, order) => {
        if (!node) return
        if (!result[order]) result.push([])

                dfs(node.left, order + 1);
        dfs(node.right, order + 1);
        if (order % 2 === 0) {
            result[order].push(node.val)
        } else {
            result[order].unshift(node.val)
        }

    }
    
    dfs(root, 0)
    
    return result
};