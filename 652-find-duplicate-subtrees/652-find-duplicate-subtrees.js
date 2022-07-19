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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let storage = new Map();
    let result = []
     
    const dfs = (node) => {
        if (node === null) return 'x'
        
        const left = dfs(node.left)
        const right = dfs(node.right)
        
        let key = `${node.val}, ${left}, ${right}`
        storage.set(key,(storage.get(key)||0) + 1);
        if(storage.get(key) === 2){
            result.push(node)
        }
        return key
    }
    dfs(root)
    return result
    
};