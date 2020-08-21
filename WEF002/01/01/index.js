// 1) Generate a random integer from 0 to 10 (reference: Math.random())
const rand = Math.floor(Math.random() * 11) // Math.floor()執行是向下舍入的,即是0.99...或以下等於0, 1.99...以下等於1, 如此類推
    // 上面的寫法 (Math.random() * 11) 是 取得 0 至 10 的值
    // const rand = Math.floor(Math.random() * 10) + 1 是取得 1 至 10 的值

// 所以先寫 const 較為理想, 去進展下一步

// 2) Ask the user input (reference: prompt())
let input; // <<<-- 該為undefined |||　const input是不可行的, 因為const的事物已經assign了, 是不可以再assign的, 而let則可以重新assign, 所以最好的寫法是先做了const先
//因為需要持續使用該 input　所以將 let input 放在 do... while loop的 外面
//而由於 input 需要再次使用及更改所以就把使用 let input; 而不是使用 const input
let attempts = 0; // attempts (出手次數)
do {
    // 6) The game ends and the player loses when the player has guessed it wrong for more than 3 times. 
    attempts++;
    if (attempts > 3) {
        break; //break表示不再運作該項目, 如上面例子: 如果attempts大於或等於3就不再運行項目
    }

    // 5) You may hint the player whether the number is larger or smaller
    if (typeof input === 'undefined') { // typeof表示屬於甚麼類型, 表示如何檢查是否undefined, 何謂type?例如: typeof = 1是number | typeof true是boolean | let a;是undefined | typeof a是undefined;
        // undefined 表示沒有任何東西
        input = prompt('Welcome! Gimme a number, please.')
    } else if (input > rand) {
        input = prompt('What is the number? (Should be smaller)');
    } else {
        input = prompt('What is the number? (Should be larger)');

        /*    attempts++;
            if (attempts >= 3) {
                break; //break表示不再運作該項目, 如上面例子: 如果attempts大於或等於3就不再運行項目
            }
        */
    }
    // 3) If the number does not match, go back to step 2
} while (parseInt(input) !== rand); // != 表示不等於的意思 而常用的是 === 及 !==意思是一樣的, 為何常用? 因為較為準確的計算
// 感嘆號 !== 表示將等於的值對上它的類別 例如: 2 == "2" (這個 "2"是一個string)
// 上句寫法是表示 string可以等於 integer. 而如何將string及integer比較呢? 是可以將該parseInt由String轉回integer (整數),就可以做出比較

// 4) If the number matches, the player wins.
if (parseInt(input) === rand) {
    /* 由於 string 是不可以等於 integer(整數)
     * 那麼如何能夠將 string 與 integer做比較呢?
     * 就是可以將它們透過使用 parseInt 由 string 轉換為 integer, 就可以作出比較
     */

    alert('Congratz. The answer is ' + rand);
} else {
    alert('Sorry, bad luck. The correct answer is ' + rand);
}