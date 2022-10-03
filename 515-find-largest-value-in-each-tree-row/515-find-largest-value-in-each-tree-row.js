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
var largestValues = function(root) {
    if(!root) return []
    let result = []
    
    let q = [root];
    
    while (q.length) {
        const stored = q.length;
        
        let max = -Infinity;
        for (let i = 0; i < stored; i++) {
            let deq = q.shift()
            console.log(deq)
            max = Math.max(max, deq.val)
            if (deq.left) q.push(deq.left)
            if (deq.right) q.push(deq.right)

        }
        
        result.push(max)
        
    }
    
    return result
};