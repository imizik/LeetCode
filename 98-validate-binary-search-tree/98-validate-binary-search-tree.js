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
 * @return {boolean}
 */
var isValidBST = function(root) {
	const dfs = (node, low, high) => {
	if (!node) return true;
	if (node.val >= high || node.val <= low) return false;
	const left = dfs(node.left, low, node.val);
	const right = dfs(node.right, node.val, high);
	return left && right
}
return dfs(root, -Infinity, Infinity)
}
