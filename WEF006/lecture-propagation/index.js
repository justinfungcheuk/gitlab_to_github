for (let div of document.querySelectorAll('div')) {
    div.addEventListener('click', function(event) {
        event.stopPropagation();
        console.log(div.className + ' is clicked');
        div.classList.add('clicked');
    })
}

// 對付 array 的物件就會用 for of,  而對付 object 的物件就會用 for in
// for of 是用於 array,    而 for in 則是用於 object

// this will throw error: 因為輸入了不存在的 'nothing', 所以就會出現錯誤
document.querySelector('nothing').addEventListener('click', function(event) {

})