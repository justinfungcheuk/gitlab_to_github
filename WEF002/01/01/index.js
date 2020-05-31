
// 1) Generate a random integer from 0 to 10 (reference: Math.random())
const rand = Math.floor(Math.random() * 11) // Math.floor()執行是向下舍入的,即是0.99...或以下等於0, 1.99...以下等於1, 如此類推

// 2) Ask the user input (reference: prompt())
let input; // <<<-- 該為undefined |||　const input是不可行的, 因為const的事物已經assign了, 是不可以再assign的, 而let則可以重新assign, 所以最好的寫法是先做了const先
let attempts = 0;
do {
    // 6) The game ends and the player loses when the player has guessed it wrong for more than 3 times. 
    attempts++;
    if (attempts >= 3) {
        break; //break表示不再運作該項目, 如上面例子: 如果attempts大於或等於3就不再運行項目
    }

// 5) You may hint the player whether the number is larger or smaller
if (typeof input === 'undefined') { // typeof表示屬於甚麼類型, 表示如何檢查是否undefined, 何謂type?例如: typeof = 1是number | typeof true是boolean | let a;是undefined | typeof a是undefined;
    input = prompt ('Welcome! Gimme a number, please.')
    } else if (input > rand) {
    input = prompt ('What is the number? (Should be smaller)');
    } else {
    input = prompt ('What is the number? (Should be larger)');

/*    attempts++;
    if (attempts >= 3) {
        break; //break表示不再運作該項目, 如上面例子: 如果attempts大於或等於3就不再運行項目
    }
*/
    }
// 3) If the number does not match, go back to step 2
} while (parseInt(input) !== rand); // != 表示不等於的意思 而常用的是 === 及 !==意思是一樣的, 為何常用? 因為較為準確的計算
// 上句寫法是表示 string可以等於 integer. 而如何將string及integer比較呢? 是可以將該parseInt由String轉回integer (整數),就可以做出比較

// 4) If the number matches, the player wins.
if (parseInt(input) === rand) {
    alert('Congratz. The answer is ' + rand);
} else {
    alert('Sorry, bad luck. The correct answer is ' + rand);
}