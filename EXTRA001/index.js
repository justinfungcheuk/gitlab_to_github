/*
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    // power of 2
    // a) for loop 當中 for擴號()入面必須有2個分號; 其餘情況的分號是optional
    /* for (let i = 0; i < A.length; i++) {
        A[i] = A[i] ** 2; // A[i] 第i的A, 而 ** 2等於 2次方的意思
    } */
    
    // b) .map()
    // .map 與 .sort並不相同, 其中.sort是會影響到原本的array, 而.sort則不會影響自己本身的array, 只會傳送出一個新的 array 出來
    // 所以要加上一個 A = 去拿取它的值, 所以 .map一定會給予你一個全新的array你, 而且是經過你的改動而得來的
    A = A.map(function(a) { // 將一個Array的每一個數經過你的function處理完之後,產生一個一模一樣數量的新的array出來, 即是5個入就5個出, 而這5個的出,是經你處理過的
        return a ** 2; // 所以要加上一個 A = 去拿取它的值, 所以 .map一定會給予你一個全新的array你, 而且是經過你的改動 return a ** 2; 而得來的
        // function 內的每一個 a/element 的意思
    });
    // ** 2
    // a * a
    //
    // .sort
    //
    
    A.sort(function(a, b){
           // positive: a is larer
           // 0: same same
           // negative: b is larger
           return a - b;
    });
    
    return A;
};