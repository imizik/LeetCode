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
var goodNodes = function(root, max = root.val) {
    if (!root) return 0
    let left = goodNodes(root.left, Math.max(max, root.val))
    let right = goodNodes(root.right, Math.max(max, root.val))
    
    if (root.val >= max) {
        return left + right + 1
    } else {
        return left + right
    }
};