/*520. Detect Capital
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
 

Example 1:

Input: "USA"
Output: True

 * @param {string} word
 * @return {boolean}
 */

/* 有三種情況是不再運作下去的
第一: 第一個字母是小寫英文字母, 之後下一個是大寫英文字母
第二: 第一個字母開始, 一直運作下去都是大寫英文字母
第三: 第一個字母大寫, 下一個是小寫, 一直運作應是小寫, 如是大寫就不再運作

*/

var detectCapitalUse = function(word) {
    const chars = word.split(''); // 先將字爆開
    if (chars[0].toUpperCase() === chars[0]) {// 如果第一個字母是大寫, 等於原本的該字母 => 即是等於大寫字母
        // 因為字不夠長,所以chars[1].toUpperCase會出現undefined, 因此要加上chars.length >=2 &&
        if ( chars.length >= 2 && chars[1].toUpperCase() === chars[1]) { // 如果第二個字母是大寫, 等於原本的該字母 => 即是等於大寫字母
            for (let i = 2; i < chars.length; i++) { // 2 代表由第二個字開始數起
                if (chars[i].toLowerCase() === chars[i]) { // chars[i].toLowerCase 表示如果那一個字是小寫, 就即刻 return false
                    return false;
                    // 如用上return該function就會結束. 無論於 for loop 或 while loop入面,該return都是相對應上面的function, 即是說該function的生命週期就是一旦執行達到return就會結束該運算,答案就會出現,不會再運算
                }
            }
        } else { // 稱上如果第一個是大寫, 而第二個字是小寫時, 當它遇上大寫就停止運作 
            for (let i = 2; i < chars.length; i++) { // 2 代表由第二個字開始數起
                if (chars[i].toUpperCase() === chars[i]) { // chars[i].toLowerCase 表示如果那一個字是小寫, 就即刻 return false
                    return false;
            }
        }
    }
} else { // 如果一開始是小寫, 當遇上大寫就停止運作
    for (let i = 1; i < chars.length; i++) { // 2 代表由第二個字開始數起
        if (chars[i].toUpperCase() === chars[i]) { // chars[i].toLowerCase 表示如果那一個字是小寫, 就即刻 return false
            return false;
        }
    }
}
return true;
};

// 以下為另一個寫法
var detectCapitalUse = function(word) {
    const chars = word.split(''); // 先將字爆開

    let shouldCheckSecondChar = false;
    let shouldLowerCase = false; // 表示逢是 lowerCase 就通過, 而 upperCase 就即刻停止, 插一個旗子給予指示現階段發生甚麼事情
    let shouldUpperCase = false;

    for (let i = 0; i < chars.length; i++) {
        if (i === 0) {// 檢查initial 的 chars
            if (chars[i].toUpperCase() === chars[i]){ // 第一個字是大寫
                // check second char
                shouldCheckSecondChar = true;
            } else {
                // from now on , no further uppercase 即是如果由第一個字就是大寫, 到該位置就不應該做 uppercase
                shouldLowerCase = true;
            }
        } else if (shouldCheckSecondChar) {
            if (chars[i].toUpperCase() === chars[i]){ // 第一個字是大寫
                shouldUpperCase = true;
            } else {
                // from now on , no further uppercase 即是如果由第一個字就是大寫, 到該位置就不應該做 uppercase
                shouldLowerCase = true;
            }
            shouldCheckSecondChar = false; // 最後不用再檢查char就直接false
        } else {
            if (shouldLowerCase) { // 所以當inde不是0的時候, 就會透過所標誌的該旗子, 如果是lowerCase又中大寫,就 return false
                if (chars[i].toUpperCase() === chars[i]) {
                    return false;
                }
            }
            if (shouldUpperCase) { // 所以當inde不是0的時候, 就會透過所標誌的該旗子, 如果是lowerCase又中大寫,就 return false
                if (chars[i].toLowerCase() === chars[i]) {
                    return false;
                }
            }
        }
    }
}