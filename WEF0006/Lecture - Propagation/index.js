for (let div of document.querySelectorAll('div')) {
    div.addEventListener('click', function(event) {
        event.stopPropagation();
        // 透過 event.stopPropagation(); 可以將在點擊 div 為 innermost 時, 不會影響其他 div 的功能 
        console.log(div.className + 'is clicked');
        div.classList.add('clicked');
    })
}

/*
 * 使用 document.querySelectorAll(){} 必須在大擴號內加上相對應的 class 名稱
 * console.log('for...of');
 * 如上所述: 所以對付 array 必須使用 for...of... 
 * for (let div of document.querySelectorAll('div')) {
    console.log(div);
    }
 */

/* 
 * 如使用 for ... in ... 就需要使用 index 來表示
 * console.log('for...in')
 * 如下例子: 所以對付 object 必須使用 for...in...
 * for (let  index in document.querySelectorAll('div')) {
 * console.log(index);
} 
 */

// this will throw error;
document.querySelector('nothing').addEventListener('click', function() {
    // 由於上面該 'nothing' 是 null 所以會出現報錯
})