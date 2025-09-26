/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ');
    let last = arr[arr.length - 1];
    return last.length;
};
