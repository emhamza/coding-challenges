/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numIndexMap = {}; //to store the nums and its index
  for (let i = 0; i <= nums.length; i ++) {
    const currentNum = nums[i];
    const complement = target - currentNum; // [7,2,-2,-6]

    if(numIndexMap.hasOwnProperty(complement) && numIndexMap[complement] !== i){
    return [numIndexMap[complement], i];
    }
  numIndexMap[currentNum] = i;
  }
  return [];
};