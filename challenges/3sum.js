/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    
    if (nums.length < 3) {
        return result;
    }
    
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Avoid duplicate triplets with the same starting element
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Avoid duplicate triplets with the same second element
                while (nums[left] === nums[left + 1]) {
                    left++;
                }
                
                // Avoid duplicate triplets with the same third element
                while (nums[right] === nums[right - 1]) {
                    right--;
                }
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
};