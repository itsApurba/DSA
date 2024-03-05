/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const res = []
    for(let i = 0; i < nums.length; i++){
        let count = 0
        for(let j = 0; j < nums.length; j++){
            if(j == i) continue
            if(nums[i]>nums[j]){
                count++
            }
        }
        res.push(count)
    }
    return res
};