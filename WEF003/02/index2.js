// Create a function checkMarkSix() that allow you to determine the prizes of Mark Six. 
// For simplicity, we assume only two numbers are required for a bid and only one prize (win or lose).
// The function usage should be as follow:
// 1. checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3]); // returns: true
// 2. checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3]); // returns: false
// 3. checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19]); // returns: true

// The first parameter is the mark six result. The second parameter is the bid.
// The function should return true if the bid is contained in the result or otherwise false.
// The function usage should be as follow:

// No console.log inside
function checkMarkSix(result,bid){
    let matched = 0;
    for (let num of result){
        if(bid[0] === num || bid[1]=== num ){
            matched++;
        }
    }
    return matched === 2; 
}

console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3])); // returns: true
console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3])); // returns: false
console.log(checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19])); // returns: true

function checkMarkSixAugmented(result,bid){
    let matched = 0;
    for(let bidNumber of bid){
        for(let num of result){
            if(num===bidNumber){
                matched++

            }
        }
    }
    return matched === bid.length;
}

console.log(checkMarkSixAugmented([1, 3, 5, 7, 9, 11], [1, 3])); // returns: true
console.log(checkMarkSixAugmented([1, 3, 5, 7, 9, 11], [2, 3])); // returns: false
console.log(checkMarkSixAugmented([2, 4, 10, 15, 14, 19], [2, 19])); // returns: true

// Bonus 1: Create another function quickPicks() that may quickly pick several bids randomly and check against one single result.
// quickPicks([1, 3, 5, 7, 9, 11], 1); // returns: [{"bid": [1, 3], "result": true}]
// quickPicks([1, 3, 5, 7, 9, 11], 3); // returns: [{"bid": [2, 4], "result": false}, {"bid": [2, 5], "result": false}, {"bid": [7, 9], "result": true}]
// The first parameter is the mark six result. The second parameter is the number of bids.
// The function should return an array of the result object with the bid generated and the result from checkMarkSix().

// No console log inside
function quickPicks(result,numberOfBids){
    const bids = [];
    for(let i = 0; i < numberOfBids; i++){
        const bid = []
        while(bid.length < 2){ // 為甚麼用 while loop? 因為不知道要general多久
            const randomNumber = Math.floor(Math.random() * 20) +1
            if(bid.includes(randomNumber)){
                bid.push(randomNumber); 
            }
        }
        bids.push(bid);
    }
    const bidResults = [];
    for(let bid of bids){

        const bidResult = {
            "result":checkMarkSix(result,bid),
            "bid": bid
        }
        bidResult.push(bidResult);
    }
    return bidResults;
}

console.log(quickPicks([1, 3, 5, 7, 9, 11], 1)); // returns: [{"bid": [1, 3], "result": true}]
console.log(quickPicks([1, 3, 5, 7, 9, 11], 3)); // returns: [{"bid": [2, 4], "result": false}, {"bid": [2, 5], "result": false}, {"bid": [7, 9], "result": true}]

// Bonus 2
// Continued with the Quick Pick function, do not return the result immediately. Instead, print the result one by one with one second interval.
// Example Output:

const quickPicksResult = quickPicks ([1, 3, 5, 7, 9, 11], 1);

const intervalId = setInterval (function(){
    if(quickPicksResult.length > 0){
        const nextResult = quickPicksResult.pop();
        console.log('Your quick pick: [${nextResult.bid}]');
        console.log(nextResult.result?"WIN":"LOSE"); // ? 的意思代表如 if一樣, 如果該項目是 true 就運行某些東西, 如果是 false 就做其他項目
    }else{                                   // 在 ? 前面的是一個 evaluate去 Boolean一個東西, 在 ? 後面的 "" 該符號內的就是true, 再後面" "的就是 false
        clearInterval(intervalId);
    }    

},1000);