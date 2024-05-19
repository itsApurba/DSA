/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    const obj = {};
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = i + 1;
    }
    
    for (let i = 1; i <= nums.length; i++) {
        if (!obj[i]) res.push(i);
    }
    
    return res
};