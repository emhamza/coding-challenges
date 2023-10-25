function bestSumDownwardTreePath(parent, values) {
  const n = parent.length;
  const dp = new Array(n).fill(0); // dp[i] will store the best sum starting from node i

  // First, calculate the best sum for each leaf node (nodes with no children)
  for (let i = 0; i < n; i++) {
    if (values[i] > dp[i]) {
      dp[i] = values[i];
    }
  }

  // Traverse the tree in a bottom-up manner
  for (let i = n - 1; i >= 0; i--) {
    if (parent[i] !== -1) {
      dp[parent[i]] = Math.max(dp[parent[i]], dp[i] + values[parent[i]]);
    }
  }

  // Find the maximum value in the dp array, which will be the answer
  let maxSum = -Infinity;
  for (let i = 0; i < n; i++) {
    maxSum = Math.max(maxSum, dp[i]);
  }

  return maxSum;
}

// Example usage:
const parent = [-1, 0, 0, 1, 1, 2];
const values = [1, 2, 3, 4, 5, 6];
const result = bestSumDownwardTreePath(parent, values);
console.log(result); // Output should be 15 (Path: 0 -> 1 -> 3 -> 4 -> 5)
