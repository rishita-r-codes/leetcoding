/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // use binary search to achieve O(log n) time complexity
    let upper = nums.length;
    let lower = 0;

    while (lower <= upper) {
        let mid = Math.floor((upper + lower) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            lower = mid + 1;
        } else {
            upper = mid - 1;
        }
    }
  // if number is not found, returns position to insert
    return upper + 1;
};
