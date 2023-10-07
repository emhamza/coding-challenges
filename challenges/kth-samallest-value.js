
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
