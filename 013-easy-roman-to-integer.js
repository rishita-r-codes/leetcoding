/**
 * @param {string} s
 * @return {number}
 */

// Using object is faster runtime than map
var romanToInt = function(s) {
    const romanValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };

    let total = 0;
    for (let i = 0; i<s.length -1; i++) {
        //assign multiple lookups to a variable
        let current = romanValues[s[i]];
        if (current < romanValues[s[i+1]]) {
            total -= current
        }
        else {
            total += current
        }
    }

    total += romanValues[s[s.length - 1]]
    return total;

};

