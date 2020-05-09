function start() { // function start() {} 作用是可更穩定地運作網頁
document.querySelector('.panel').addEventListener('click', function() {
    alert('Hey! Click the right place!@@!')
});

for (let grid of document.querySelectorAll('.grid')) {
    grid.addEventListener('click', function(event) { // 在該選項增加 function(event) 是可以知道按了甚麼按鈕及在甚麼位置按了按鈕
        event.stopPropagation(); // event.stopPropagation(); 作用是可以當按鈕按下panel內空白的位置時, 就會出現 alert的提示, 這樣就是 event 的 object 功能!!
       
       
        console.log(event);
        if (grid.innerHTML == '') {
            grid.innerHTML = '1';
        } else {
            // grid.innerHTML += 1; 該寫法會導致每點擊一下會不停有111111111的顯示, 因為 1 是一個 string
            grid.innerHTML = parseInt(grid.innerHTML) + 1; // 該寫法則會變成每點擊一下就會加+1
            grid.classList // 非常常用的 classList是可以 加 或 減 class 就住該 class = "grid" 例如以下 if
            if (parseInt(grid.innerHTML) > 5) {
                grid.classList.add('big'); // 當連續按下 grid 大於 5時, 就會多了 big 該字, 其用處是: 可從 css加入指令讓該選項發生你從css內輸入的指令
            }
        }
    })
  }
}

window.onload = start; // 由 function start() {}延伸出來的, 為更穩定地運作網頁的 JS