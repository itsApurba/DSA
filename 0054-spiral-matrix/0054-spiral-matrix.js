/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const tick = matrix.length * matrix[0].length
    let top = 0
    let left = 0
    let bottom = matrix.length - 1
    let right = matrix[0].length -1

    let count = 0 
    const ans = []

    while(tick > count){

        for(let i = left; i <= right && tick > count; i++){
            ans.push(matrix[top][i])
            count++
        }
            top++
        for(let i = top; i <= bottom && tick > count; i++){
            ans.push(matrix[i][right])
            count++
        }
            right--
        for(let i = right; i >= left && tick > count; i--){
            ans.push(matrix[bottom][i])
            count++
        }
            bottom--
        for(let i = bottom; i >= top && tick > count; i--){
            ans.push(matrix[i][left])
            count++
        }
            left++
    }
    return ans
};