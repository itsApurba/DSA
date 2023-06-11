/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
     let mappings = {};
    
    for(let word of strs) {
        // this will convert 'eat' into 'e','a','t' and then sort it to 'a','e','t' and then join to 'ate'
        // we do this so the sorted anagram key will always be the same. Other related anagrams will have the same key
        const anagramGroup = word.split("").sort().join("");
        
        // if we have a mapping that exists for the anagram group, push the item to that group, 
        // else create a new array and append the word
        mappings[anagramGroup] ? mappings[anagramGroup].push(word) : mappings[anagramGroup] = [word];
    }
    // returns all the mappings as a unified array.
    return Object.values(mappings);
};