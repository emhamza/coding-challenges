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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let result = 0;
  let count = 0;

  //helper function to perform inorder transversal
  function inorderTransversal(node) {
      if(!node) return;
      inorderTransversal(node.left);
      count++;

      if (count === k) {
          result = node.val;
          return;
      }

      inorderTransversal(node.right);
  }

  inorderTransversal(root);

  return result;
  
};