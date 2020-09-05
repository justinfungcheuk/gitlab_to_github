let turn = 0; // let turn = 0; 表示現在是第幾回合
let playing = true;
//先定義 Boolean 將 let playing = true; 

let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
];

/* 由於有上面的 8 個條件, 就可以記下它們點擊了那一個位置
 * 所以需要設定 9 個格, 而同時間需要為該 9 個格命名
 * 另需要透過 for loop - for (let i = 0; i < block.length; i++) { 來獲得 index
 */
let currentBoard = [
    null, null, null,
    null, null, null,
    null, null, null,
]

// for (let block of document.querySelectorAll('.block')) { 
//由於該 for loop 不能為我們提供 index, 所以不使用, 而選擇用下面的 for loop
let blocks = document.querySelectorAll('.block'); // 先用該 array 裝起 '.block'
for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]; // 代表第幾個 blocks
    block.addEventListener('click', function() {
        if (!playing) {
            return;
        } // 如果不是正在遊戲中, 就不要再操作, 所有 不是遊戲中就要 return, 結束遊戲

        //console.log(block.innerHTML.trim()); //透過 trim() 將空格 或 分行 全部清除
        if (block.innerHTML.trim() == '') { //同樣地 if 也需要將 空格 或 分行 全部清除
            //如果 block.innerHTML == '' 沒有東西, 才執行以下回合的編碼, 除去出現重複 XO 的問題
            if (turn % 2 == 0) { //表示當 turn == 0 就是 X
                //當 turn 除以 2, 它的餘數是 0, 就出 X
                block.innerHTML = '<span class="x">X</span>';
                currentBoard[i] = 'x';
            }
            if (turn % 2 == 1) {
                //當 turn 除以 2, 它的餘數是 1, 就出 O
                block.innerHTML = '<span class="o">O</span>';
                currentBoard[i] = 'o';
            }
            /* [i] 代表 當它 loop 到第幾格時 - block.addEventListener('click', function() {
             * 當第一格被點擊時, 就會檢查這一格是否空的 - block.innerHTML.trim() == ''
             * 當這一格不是空的, 及它是第幾回合, 而它是雙數就代表是 X - (turn % 2 == 0) 及 block.innerHTML = '<span class="x">X</span>';
             * 滿足以上條件就放一個 X 進去格子裡面
             * 然後將 currentBoard[i] 的該 array 的第一格(即是 let currentBoard = [null, null,(這一個null轉為 X) null, ]
             */
            console.log(currentBoard);

            //check winners 檢查是否全中 3格
            //for (let condition of winningConditions) { // 將 condition 取出來
            for (let j = 0; j < winningConditions.length; j++) {
                const condition = winningConditions[j];
                // 以上兩款的 for loop 都是一樣的, 只是原始 for loop 多了 const condition = 
                /*
                 * for (let condition of winningConditions)
                 * 是將所有的 let winningConditions = [] 內的所有東西取出來
                 * 即是將 [] 所有的 8 個條件取出來操作 8次
                 * 而分別每一個 [] 內的 如 [1,2,3], 其 condition 都是一個 array 來的
                 * 所以會取得 8 個 array, 而每個 array 都有 3 個位置
                 * 因此需要用 console.log(condition[0], condition[1], condition[2]); 來獲取該 3 個位置
                 * 而該 3 個位置分別是在 currentBoard 內需要檢查的三個位置
                 * 所以需要將該 3 個位置分別作為 currentBoard[condition[0]], 的 index 
                 */

                if (currentBoard[condition[0]] != null && //檢查它不是一個 null
                    currentBoard[condition[0]] == currentBoard[condition[1]] &&
                    currentBoard[condition[1]] == currentBoard[condition[2]]) {
                    //console.log(currentBoard[condition[0]] + ' is winnner')
                    document.querySelector('.turn-text').innerHTML = currentBoard[condition[0]] + ' is winnner'
                        // 將 is winner 顯示在 turn 上面
                    playing = false;
                    //當有勝利者出現時, 不是正在遊戲中就變成 false

                    return;
                    /* 
                     * 需要加上 return 當有勝利者出現時, 結束遊戲
                     * 如果不加上 return; 下面的所有編碼都會繼續操作
                     */
                } //以上 currentBoard[]是等於同一個 symbol
            }

            turn += 1;
            // 在過了一個回合後, turn 回合就加上 +1, 下一回合就是 1 再下一回合就是 2, 如此類推

            if (turn % 2 == 0) {
                document.querySelectorAll('.turn > div')[0].classList.add('current');
                document.querySelectorAll('.turn > div')[1].classList.remove('current');
                document.querySelector('.turn-text').innerHTML = '<span class="x">X</span>Turn'
            } else {
                document.querySelectorAll('.turn > div')[1].classList.add('current');
                /*
                 * 如果是單數, 所有 class = "turn" 之下的第二個 <div class = "player">O<div>就是 .add('current');
                 * 而第一個 <div class = "player">X<div>就不是 - .remove('current')
                 */
                document.querySelectorAll('.turn > div')[0].classList.remove('current');
                document.querySelector('.turn-text').innerHTML = '<span class="x">O</span>Turn'

            }
        }
    })
}

document.querySelector('button').addEventListener('click', function() {
    //當 button 被點擊時, playing 就會變回 true 
    playing = true;

    turn = 0; // 將回合數變回 0;

    // 而 curretnBoard 也需要重新設定
    currentBoard = [
        null, null, null,
        null, null, null,
        null, null, null,
    ];

    //將每一個 block 變成空的 ''
    let blocks = document.querySelectorAll('.block'); // 先用該 array 裝起 '.block'
    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i]; // 代表第幾個 blocks
        block.innerHTML = '';
    }

    // 將回合數變回 0;
    if (turn % 2 == 0) {
        document.querySelectorAll('.turn > div')[0].classList.add('current');
        document.querySelectorAll('.turn > div')[1].classList.remove('current');
        document.querySelector('.turn-text').innerHTML = '<span class="x">X</span>Turn'
    } else {
        document.querySelectorAll('.turn > div')[1].classList.add('current');
        /*
         * 如果是單數, 所有 class = "turn" 之下的第二個 <div class = "player">O<div>就是 .add('current');
         * 而第一個 <div class = "player">X<div>就不是 - .remove('current')
         */
        document.querySelectorAll('.turn > div')[0].classList.remove('current');
        document.querySelector('.turn-text').innerHTML = '<span class="x">O</span>Turn'

    }
})

document.querySelector('select').addEventListener('change', function(event) {
    console.log(event.currentTarget.value);
    //透過 event.currentTarget 找到 'select' 出來, 而 .value 就知道得到甚麼 select
})