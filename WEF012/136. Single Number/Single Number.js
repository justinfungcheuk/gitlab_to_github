/* 136. Single Number

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1

 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let counts = {}; // counts 先記下每個號碼出了多少次, 再用obj包起來
    for ( let i = 0; i < nums.length; i++) {
        // 要檢查 null or undefined 通常使用 == 來表示
        // 如果要檢查它是屬於 undefined 而 null 是不計算在內的時候, 就會使用該方式:
        // if (typeof counts[nums[i]] === 'undefined'){} // 是一個string來表示'undefined' 而該類型是用文字表達出來, 它是一個undefined, 該寫法是必須為undefined才可以這樣寫
        // 所以檢查undefined的做法, 必須是用 typeof 和 必須使用 === 及 必須使用 string的形式表示 'undefined'
        // 但是 null 就必須使用 三個等號 ===
        if (counts[nums[i]] == null) { // 要將(counts[nums[i]]) == null 定義, 不定義就會出nota number
            counts[nums[i]] = 0;
        }
        counts[nums[i]] = counts[nums[i]] + 1; // counts[nums[i]] 表示現在的數字是多少, 再將該數字擺入 obj[] 內做計算,每見到該數字就 +1, 再尋找那一個數是出一次 
    }
    
    for (let num in counts) { // for in 是表示 for obj的意思, 而該for in內的 num 就會將 counts[nums[i]] 內的 nums[i] 即是 2, 1逐一拿出來, 例如: 題目的 example 1: input:[2,2,1]內,就有 2 和 1, 所以就會有 2 個 key,就是 1 和 2, 所以該 (let num in counts)的 let num 就會拿出來 1和2,
        if(counts[num] == 1) {
            return num; // return single number 出來
        }
        
    }
};