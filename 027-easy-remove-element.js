/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // pointer i indicates where number should be placed
    let i = 0;
  // pointer j finds the number which should be moved to front of array
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++
        }
    }

    return i;
};
