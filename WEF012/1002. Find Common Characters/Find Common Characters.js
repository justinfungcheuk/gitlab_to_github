/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let result = A[0].split(""); // 先將array爆開
    result.sort(); // 再將它們分類, 從第二隻字開始檢查
    // b e l l a
    // a b e l l
    
    for (let i = 1; i < A.length; i++) {
        const chars = A[i].split(""); // 將第二隻字爆開
        chars.sort(); // 再將兩隻字排次序
        // r o l l e r
        // e o l l r r
        // chars[j] : e 
        // result[0] : b       該結果result[o]由 a 變成了 b
        
        
        let k = 0; // k 代表cloo該字, 由 0 開始逐一檢查 cloo & cklo, 而 cklo代表 j
        for (let j = 0; j < chars.length; j++) {
            while (chars[j] > result[k]) { // 如果 j 大於 k 就轉位, 先檢查到相同字母為止
                result.splice(k, 1); // .splice()的意思是從array內刪除東西, 其方法(x,1)是表示由x代表第幾隻開始刪除, 而 1 是表示刪除多少個
        }
        if(chars[j] == result[k]) {
         k++;
            }
        }
        result.splice(k); // 該部分可刪除不適用的 cloo部分與cklo已檢查後面不相同的字母, 即是 cloo的o會被直接刪除, 因為cklo已先完成檢查.
    }
    return result; // 最後result會得到答案
};