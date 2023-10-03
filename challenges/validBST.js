class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const isValidBST = function(root) {
  const inorderTraversal = (node, lower, upper) => {
    if (!node) return true;

    if ((lower !== null && node.val <= lower) || (upper !== null && node.val >= upper)) {
      return false;
    }

    return inorderTraversal(node.left, lower, node.val) && inorderTraversal(node.right, node.val, upper);
  };

  return inorderTraversal(root, -Infinity, Infinity);
};

// Helper function to build a binary tree from an array
const buildTreeFromArray = (arr, index) => {
  if (index >= arr.length || arr[index] === null) {
    return null;
  }

  const root = new TreeNode(arr[index]);
  root.left = buildTreeFromArray(arr, 2 * index + 1);
  root.right = buildTreeFromArray(arr, 2 * index + 2);

  return root;
};

const arr = [5, 1, 4, null, null, 3, 6];
const root = buildTreeFromArray(arr, 0);

const res = isValidBST(root);
console.log(res); // Output: false
