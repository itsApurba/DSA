/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0
    for(let i = 0; i < sentences.length; i++){
        const count = sentences[i].trim().split(' ')
        if(max < count.length){
            max = count.length
        }
    }
    return max
};