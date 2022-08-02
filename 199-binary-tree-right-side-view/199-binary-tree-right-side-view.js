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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result = [];
    let queue = [root]
    if (root === null) return result;
    
    while (queue.length > 0) {
        const size = queue.length
        for (let i = 0; i < size; i++) {
            const dequeued = queue.shift();
            if (i === size - 1) result.push(dequeued.val)
            
            if (dequeued.left !== null) queue.push(dequeued.left)
            if (dequeued.right !== null) queue.push(dequeued.right)
        }
    }
    return result
};

