/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let nIndex = 0;
    const hLen = haystack.length;
    const nLen = needle.length; 
    for (let i = 0; i < hLen; i++) {
        if (haystack[i] === needle[nIndex]) {
            nIndex++;
        } else {
            i = i - nIndex;
            nIndex = 0;
        }
        if (nIndex === needle.length) {
            return i - nIndex + 1;
        }
    }
    return -1;
};
