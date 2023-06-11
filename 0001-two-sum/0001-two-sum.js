/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0, right = 1
    while(left <= right){
        let sum = nums[left] + nums[right]
        if(sum == target){
            return [left, right]
        }else if (right === nums.length -1) {
      left++
      right = left + 1;
    } else {
      right++;
    }
    }
};