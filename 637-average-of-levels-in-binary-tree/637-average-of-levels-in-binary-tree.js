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
var averageOfLevels = function(root) {
    let q = [root];
    let result = []
    
    while (q.length) {
        let length = q.length
        let sum = 0
        let count = 0
        console.log(q, result)
        for (let i = 0; i < length; i++) {
            count++
            let deq= q.shift()
            sum += deq.val
            if (deq.left) q.push(deq.left)
            if (deq.right) q.push(deq.right)

        }
        result.push(sum/count)
        
    }
    
    return result
};