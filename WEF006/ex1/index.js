let turn = 0;
let playing = true;

let winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [3,5,8],

    [0,4,8],
    [2,4,6]
];

let currentBoard = [
    null, null, null, // 然後將 curerntBoard這個array的第一格將它轉為X [null, null(第一格表示這一個格), null]
    null, null, null,
    null, null, null,
]

// for (let block of document.querySelectorAll('.block')) {
    let blocks = document.querySelectorAll('.block');
    for (let i=0; i < blocks.length; i++) {
        const block = blocks[i];
    block.addEventListener('click', function() {
        if (!playing) { // 表示如果不是在玩遊戲時, 就 return, 不要再執行任何指令
            return;
        }
        // console.log(block.innerHTML.trim()); // .trim() 表示將所有的空格及分行全部清除
        if (block.innerHTML.trim() == '') {
        if (turn % 2 == 0) {
            block.innerHTML = '<span class ="x">X<span>';
            currentBoard[i] = 'x';
        }
        if (turn % 2 == 1){
            block.innerHTML = '<span class="o">O<span>';
            currentBoard[i] = 'o'; // 這個 currentBoard[i] 的 [i] 是表示當它loop到去第幾格, 例如: 當它loop第一格的時候, 當第一格按下的時候, 就會檢查該第一格是否空的, 如不是, 現在第幾turn, 是雙數, 是x, 放X入去, 然後將 curerntBoard這個array的第一格將它轉為X 
        }
        console.log(currentBoard);

        // check winners
        //for (let condition of winningConditions){ // 該寫法是檢查該 box 是否中condition,   // condition是表示loop出所有的勝利條件出來 例如: 中[0,1,2],[3,4,5]等等
        for (let j = 0; j < winningConditions.length; j++) { // 此寫法為 for 的最原始寫法!!!
            const condition = winningConditions[j]; 
            if ( // 這個if的意思是 如果第一格 == 第二格, 而第二格又等於第三格
            currentBoard[condition[0]] != null && // 檢查第一格不是null
            currentBoard[condition[0]] == currentBoard[condition[1]] && // 每個condition都是一個 array, 所以有8個array出來, 每個 array有三個位, 所以可以loop 第[0][1][2]的位置
            currentBoard[condition[1]] == currentBoard[condition[2]]) {  // 左方有3個數字,分別是你想於currentBoard檢查的三個位置,所以可以將該3個數字作為currentBoard的index
                document.querySelector('.turn-text').innerHTML = currentBoard[condition[0]] + ' is winner' // 在element內表示出那一方是winnner
                playing = false; // 當有人勝出時, 就變成 false, 不可再玩下去
                return;
            }
        }
        turn +=1;

        if (turn % 2 == 0) { //表示在 X 和 O 的turn
            document.querySelectorAll('.turn > div') [0].classList.add('current');
            document.querySelectorAll('.turn > div') [1].classList.remove('current');
            document.querySelector('.turn-text').innerHTML = '<span class="x>X</span> Turn'
        } else {
            document.querySelectorAll('.turn > div') [1].classList.add('current'); //如果是單數, 所有在turn class的play和score, 而第二個才是current
            document.querySelectorAll('.turn > div') [0].classList.remove('current'); // 第一個就不是current
            document.querySelector('.turn-text').innerHTML = '<span class="o>O</span> Turn' // 在element內展示出輪到X還是O的 turn
        }
      
       } //必須留意該符號,一定要擺在入面, 因為擺在該位置可表示為每一個格都可以被click,當被click的時候可以先檢查有沒有東西,如沒有東西可以繼續被click, 有東西就不用click
    })
}

document.querySelector('button').addEventListener('click', function() { // 該指令是做restart game的按鈕, 表示如果button被按下, playing就變回 true
    playing = true;
    turn = 0; // 將所有事物 reset
    currentBoard = [
        null, null, null, // 然後將 curerntBoard這個array的第一格將它轉為X [null, null(第一格表示這一個格), null]
        null, null, null,
        null, null, null,
    ];
    let blocks = document.querySelectorAll('.block');
    for (let i=0; i < blocks.length; i++) {
        const block = blocks[i];
        block.innerHTML = ''; // 表示每一個 block的HTML變成空白無任何東西
    }
    if (turn % 2 == 0) { //表示在 X 和 O 的turn
        document.querySelectorAll('.turn > div') [0].classList.add('current');
        document.querySelectorAll('.turn > div') [1].classList.remove('current');
        document.querySelector('.turn-text').innerHTML = '<span class="x>X</span> Turn'
    } else {
        document.querySelectorAll('.turn > div') [1].classList.add('current'); //如果是單數, 所有在turn class的play和score, 而第二個才是current
        document.querySelectorAll('.turn > div') [0].classList.remove('current'); // 第一個就不是current
        document.querySelector('.turn-text').innerHTML = '<span class="o>O</span> Turn' // 在element內展示出輪到X還是O的 turn
    }
})


// 未設定 html 的 medium/easy/difficult 所有沒有反應
document.querySelector('select').addEventListener('change', function(event) {  // 尋找Medium/Easy/Difficult
    console.log(event.currentTarget.value); // currentTarget是找回該 Select 出來
})