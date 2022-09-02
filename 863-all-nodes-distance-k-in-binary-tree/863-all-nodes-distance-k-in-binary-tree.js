/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    let tNode = null;
    let result = [];
    
    const findTarget = (node, parent) => {
        if (!node) return
        if (tNode !== null) return
        node.parent = parent
        if (node === target) {
            
            tNode = node
            return
        }
        findTarget(node.left, node)
        findTarget(node.right, node)
    }
    
    const findK = (node, level) => {
        if (!node || node.visited) return
        
        if (level === k) {
            result.push(node.val)
            return
        }
        node.visited = true
        findK(node.left, level + 1)
        findK(node.right, level + 1)
        findK(node.parent, level + 1)
    }
    
    findTarget(root);
    findK(tNode, 0)
    return result;

};