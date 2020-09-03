for (let grid of document.querySelectorAll('.grid')) {
    grid.addEventListener('click', function() {
        grid.innerHTML = 'Y';
        /* 使用 for loop 的 let ... of ... 可就著每一個 grid,
         * 當它們被點擊後, 就會操作 function(){ gird.innerHTML = 'Y';}
         */
    });
}