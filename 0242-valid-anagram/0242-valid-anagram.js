/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const objs = {}
    const objt = {}
    if(s.length !== t.length) return false
    
    for(let i = 0; i < s.length; i++){
        objs[s[i]] = (objs[s[i]] || 0) + 1
    }
    for(let i = 0; i < t.length; i++){
        objt[t[i]] = (objt[t[i]] || 0) + 1
    }
    for(let keys in objs){
        if(objs[keys] !== objt[keys]){
            return false
        }
    }
    return true
};