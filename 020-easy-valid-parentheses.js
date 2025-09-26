/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let valid = true;
    let stack = [];
    let opening = {
        "{": "}",
        "(": ")",
        "[": "]"
    }
    for (let bracket of s) {
        if (opening.hasOwnProperty(bracket)) {
            stack.push(bracket);
        }
        else {
            if (stack.length === 0 || opening[stack.pop()] !== bracket) {
                valid = false;
                break;
            }
        }
    }
    if (stack.length > 0) {
        valid = false;
    }
    return valid;
};
