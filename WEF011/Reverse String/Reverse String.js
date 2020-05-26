/* Reverse String
 * Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

 

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

 // 該題目的 O(1) 的意思不是只可以有1個數的意思, 而是無論你有多少的element,都是與1個element一樣有一倍的數目, 例如: 於1個element的時候用1格,就是O(1)
/* var reverseString = function(s) {
    let reversedArray = []; // [] 表示空格
    // i = s.length - 1 表示用element - 1的意思, 因為index是由0數起的
    // i = 0; 表示去到 0 就要停止, 而少於 >0 的index就不處理
    // i--; 表示寫法是由後數上前的 for loop
    for (let i = s.length - 1; i >= 0; i--) {
        reversedArray.push(s[i]); // 不斷將第 i 個 s 擺入去
    }
}; // 以上寫法是 O(n), 並不符合題目要求 */

var reverseString = function(s) {
    s.reverse() // 該寫法是可直接改變 array 的function
}; // 以上寫法是 O(1), 符合題目要求

/* var reverseString = function(s) {
    for (let i = 0; i < s.length / 2; i++) { // i < s.length / 2 表示處理一半 array 內的 string
        let a = s[i]; // 表示第一個字就是 第0個的意思
        let b = s[s.length - 1];
        s[i] = b;
        s[s.length - 1 - i] = a;

    }
}; // 以上寫法都是O(n) */