/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let alphanum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];
    let arr = Array.from(s.toLowerCase());
    let cleaned = arr.filter((char) => {
        return alphanum.includes(char);
    })

    for (let i = 0, j = (cleaned.length - 1); i <= j; i++, j -= 1) {
        if (cleaned[i] !== cleaned[j]) {
            return false;
        }
    }
    return true;
};
