/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix= ""
    let first = strs[0];
    for (let i = 0; i<first.length; i++) {
        if (strs.every((word) => word[i] === first[i])) {
            prefix += first[i]
        }
        else {
          //stops when there is a break in similarity
            break;
        }
    }
    return prefix;
};
