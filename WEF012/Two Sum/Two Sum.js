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

var twoSum = function(nums, target) {
    
let pastNumbers = {}; // 先形成一個空的 obj
for (let i = 0; i < nums.length; i++) { // 先 for loop 一次
    let complement = target - nums[i];  // complement即是用 target 例如: 9 減去 正在loop的數字 例如: 2 就會得出 7
    if (pastNumbers[complement] !=null) { // 如果之前已經見過 7, 檢車obj有沒有某個key可用該寫法, 即是之前有 7 這個key的存在
        let j = pastNumbers[complement]; // 之前的 j 就等於 obj入面key的value
        return [j, i];
    }
    pastNumbers[nums[i]] = i; //如果不中就將現在的obj入面將現在的數記下來 [nums[i]]
}
}; // O(n) 的寫法