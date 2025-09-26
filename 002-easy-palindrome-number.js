/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let palindrome = true;
    x = String(x);
    for (let i = 0; i < (x.length/2); i++) {
        if (x[i] !== x[x.length - i - 1]){
            palindrome = false;
            break;
        }
    }
    return palindrome;
};
