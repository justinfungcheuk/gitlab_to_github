/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i == j) { // 直接不用檢查, 因為同一個數不會用兩次, 所以用continue跳去下一步
                continue;
            }
        if (nums[i] + nums[j] == target) {
            return [i, j];
        }
        }
    }
}; */

var twoSum = function(nums, target) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
}; // 以上為更快的運算方法 n log n