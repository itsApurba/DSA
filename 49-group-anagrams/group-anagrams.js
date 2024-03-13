/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let obj = {}

    for(let i = 0; i < strs.length; i++){
        
        const anagramGroups = strs[i].split("").sort().join("");
        
       obj[anagramGroups] ? obj[anagramGroups].push(strs[i]) : obj[anagramGroups] = [strs[i]];
    }
    return Object.values(obj)
};