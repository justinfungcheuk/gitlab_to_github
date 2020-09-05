function start() {
    document.querySelector('.panel').addEventListener('click', function() {
        alert('^_^ wear glasses la');
    });
    for (let grid of document.querySelectorAll('.grid')) {
        grid.addEventListener('click', function(event) {
            event.stopPropagation();
            /* 可在 'click' 點擊發生在白色的空位時, 發生 alert, 而在點擊黑色時不會
             */
            //console.log(event);
            /*而在 .addEventListener() 裡面的 function() 要有一個 parameter
             * 即是有一個 event 的 object
             * 會提供一些額外的資訊告訴你知道到底該 'click' 發生了甚麼事情
             * 例如: 該 'click' 是在甚麼位置 或者是在 keyborad 上按了甚麼按鈕等等
             */
            //grid.innerHTML = 'Y';
            /* 使用 for loop 的 let ... of ... 可就著每一個 grid,
             * 當它們被點擊後, 就會操作 function(){ gird.innerHTML = 'Y';}
             */
            /* .addEventListener() 代表可以無限 click, 所以以下的 .addEventListener() 最常用
             * document.querySelector('#test').addEventListener('click',function(){
               this inside the event handler is referring to the element itself
               this.innerHTML = parseInt(this.innerHTML)+1
               });
             * 
             */

            if (grid.innerHTML == '') {
                grid.innerHTML = '1';
            } else {
                grid.innerHTML = parseInt(grid.innerHTML) + 1;
                if (parseInt(grid.innerHTML) > 5) {
                    grid.classList.add('big');
                }
            }
        })
    }
}

window.onload = start;
/* 將 function start (){}
 * window.onload = start;
 * 加入到 JS 中, 可在視窗操作整個 JS 後才運作 start 該 function
 * 所以無論將 <script src="index.js"></script> 放在 <body> 的頂部或底部都可以正常操作 JS 編碼 
 */