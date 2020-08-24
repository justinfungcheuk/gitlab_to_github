// Create a function checkMarkSix() that allow you to determine the prizes of Mark Six. 
// For simplicity, we assume only two numbers are required for a bid and only one prize (win or lose).
// The function usage should be as follow:
// 1. checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3]); // returns: true
// 2. checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3]); // returns: false
// 3. checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19]); // returns: true

// The first parameter is the mark six result. The second parameter is the bid.
// The function should return true if the bid is contained in the result or otherwise false.
// The function usage should be as follow:

// // 以下整個 function 都是 No console.log inside
function checkMarkSix(result, bid) {
    let matched = 0;
    for (let num of result) {
        // 第一個就 bid[0], 第二個就 bid[1], 因為 array 的寫法就是 []包著的數字就代表拿取第幾個的數字
        if (bid[0] === num || bid[1] === num) {
            matched++;
            //因為 matched++ 一定是要能夠被 reassign, 所以不可以用 const, 而要用 let
        }
    }
    return matched === 2;
}

console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3])); // returns: true
console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3])); // returns: false
console.log(checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19])); // returns: true

function checkMarkSixAugmented(result, bid) { //Augmented(增強)
    let matched = 0;
    for (let bidNumber of bid) { //The second parameter is the bid.
        for (let num of result) { //The first parameter is the mark six result
            if (num === bidNumber) {
                matched++

            }
        }
    }
    return matched === bid.length;
}

console.log(checkMarkSixAugmented([1, 3, 5, 7, 9, 11], [1, 3])); // returns: true
console.log(checkMarkSixAugmented([1, 3, 5, 7, 9, 11], [2, 3])); // returns: false
console.log(checkMarkSixAugmented([2, 4, 10, 15, 14, 19], [2, 19])); // returns: true







// Bonus 1: 
// Create another function quickPicks() that may quickly pick several bids randomly and check against one single result.
// quickPicks([1, 3, 5, 7, 9, 11], 1); // returns: [{"bid": [1, 3], "result": true}]
// quickPicks([1, 3, 5, 7, 9, 11], 3); // returns: [{"bid": [2, 4], "result": false}, {"bid": [2, 5], "result": false}, {"bid": [7, 9], "result": true}]
// The first parameter is the mark six result. The second parameter is the number of bids.
// The function should return an array of the result object with the bid generated and the result from checkMarkSix().



/* 以下整個 function 都是 No console.log inside
 * 為甚麼不使用 console.log在內部呢? 因為如果寫在內部, 即是代表了你 assume了處理完後一定會 print 出來
 * 而該 assume 會使你比較困難地重用你的編碼
 * 所以, 在最後才用 console.log 更容易處理編碼
 */
function quickPicks(result, numberOfBids) {
    const bids = [];
    // []; 該 array 是甚麼呢? 該 array 是儲存起我們要 generate 的那堆 bid
    /* 而 bids = []; 最後的結果應該如下: 是一個 array of array 的結果
     * 所以該 array of array 有兩層都是很正常, 
     * 因為外面的 array 是 const bids = [];, 內裡的 array 是 const bid = []
     * 所以可以將內裡的處理中的 array, const bid = [] 把每個塞入去外面的 array, const bids = [];
     * [
     *    [1,3],
     *    [2,3],
     *    [2,19]
     * ]
     */
    for (let i = 0; i < numberOfBids; i++) {
        const bid = []
        while (bid.length < 2) { // 為甚麼用 while loop? 因為不知道要generate多久
            //而使用while loop 是因為要逐個逐個 generate 返 
            // bid.length < 2 是代表 當它未夠 2 個時, 不要離開

            const randomNumber = Math.floor(Math.random() * 20) + 1
                // Math.floor(Math.random() * 20) + 1 是提取 1 - 20 的數目字

            if (!bid.includes(randomNumber)) {
                //includes()代表 如包括了原有的數字就是 true, 如沒有的就是 false
                //例子: [1,2,3,4,5].includes(2) 就代表 true, 而 includes(-2) 代表 false
                //因為是 randomNumber, 最在乎的是撞不撞, 因為我們要不撞, 

                bid.push(randomNumber);
                //!表示如果不包含 randomNumber, 就要 push 入去 randomNumber
            }
        }
        bids.push(bid);
        //將 result 結果擺回入去, 即是將 bid 該 result 擺回進去 bids
        //因為題目要求當有 3 個的時候要逐個 call
    }
    const bidResults = [];
    /* 因為我們要的結果是 [{"bid": [2, 4], "result": false}, {"bid": [2, 5], "result": false}, {"bid": [7, 9], "result": true}]
     * 而上面的結果也是一個 result, 也是一個 array 來的
     * 所以, 我們就又需要一個 array, 即是上面的 const bidResults = [];
     */

    for (let bid of bids) {
        //然後逐個逐個 push 入去
        /* [{"bid": [2, 4], "result": false}, {"bid": [2, 5], "result": false}, {"bid": [7, 9], "result": true}]
         *  這整個是一個 object  這是一個 result(從 checkMarkSix得出的 value)
         *   而 "bid": 就是塞入去的物件 [2, 4]
         * 
         *   所以我們需要寫出 
         * const bidResult = {
         *    "result": checkMarkSix(result, bid),
         *    "bid": bid
         * }
         * bidResult.push(bidResult);
         */
        const bidResult = {
            "result": checkMarkSix(result, bid),
            "bid": bid
        }
        bidResults.push(bidResult);
    }
    return bidResults;
}

console.log(quickPicks([1, 3, 5, 7, 9, 11], 1)); // returns: [{"bid": [1, 3], "result": true}]
console.log(quickPicks([1, 3, 5, 7, 9, 11], 3)); // returns: [{"bid": [2, 4], "result": false}, {"bid": [2, 5], "result": false}, {"bid": [7, 9], "result": true}]






// Bonus 2
// Continued with the Quick Pick function, do not return the result immediately. Instead, print the result one by one with one second interval.
// Example Output:

const quickPicksResult = quickPicks([1, 3, 5, 7, 9, 11], 3);

const intervalId = setInterval(function() {
    if (quickPicksResult.length > 0) { // 代表 quickPicksResult 還有東西的話,
        // 當有東西時, 就運作以下條件
        const nextResult = quickPicksResult.pop(); // 取出該result
        console.log(`Your quick pick: [${nextResult.bid}]`);
        console.log(nextResult.result ? "WIN" : "LOSE");
        // ? 前面的就代表是一個 Boolean 的一個物件
        // ? 後面的意思代表如 if一樣, 如果該項目是 true 就運行某些東西, 如果是 false 就做其他項目
    } else { // 在 ? 前面的是一個 evaluate去 Boolean一個東西, 在 ? 後面的 "" 該符號內的 "WIN" 就是true, 再後面" " 內的 "LOSE" 就是 false
        clearInterval(intervalId);
        //代表 quickPickResult 沒有東西, 就停止 intervalId 運作
    }

}, 1000); //每隔 1 秒檢查 result 有沒有東西, 有就出 result, 沒有就不出