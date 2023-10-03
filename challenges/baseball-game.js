/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  const stack = [];

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];

    if (op === '+') {
      // Add the sum of the last two scores to the stack
      const lastScore = stack[stack.length - 1];
      const secondLastScore = stack[stack.length - 2];
      stack.push(lastScore + secondLastScore);
    } else if (op === 'D') {
      // Double the last score and add it to the stack
      const lastScore = stack[stack.length - 1];
      stack.push(2 * lastScore);
    } else if (op === 'C') {
      // Remove the last score from the stack
      stack.pop();
    } else {
      // Convert the string to an integer and add it to the stack
      stack.push(parseInt(op, 10));
    }
  }

  // Calculate the total sum by summing up all scores in the stack
  return stack.reduce((total, score) => total + score, 0);
};
