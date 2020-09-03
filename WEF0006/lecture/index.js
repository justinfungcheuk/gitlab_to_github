/* document 亦即是 variable */
// console.log(document.getElementById("abc"));

// .map() 的用途是可為一個 arr 的新值每個加上 1
// const arr = [1, 2, 3]; // 將每個 element 都加上 1
// const newArr = arr.map(function(x) {
//     /* 給予一個 function(x) 及一個指令 x,
//      * 當每個 element 要運作時, 就 call 該 function(x)
//      * 然後再將該指令 x,  最後會得到 return x + 1;
//      * 所以該 newArr 的結果會變成 [2,3,4]  
//      */
//     return x + 1;
// });




// document.querySelector("html").addEventListener("click", function() {
//     alert("You clicked HTML!")
// });;
// console.log(document.querySelector("div.special p"));
// //該寫法可以找到 <p>Hello<p>
// document.querySelector(".xmas");
// //該寫法只會得到 第一個的 <div class="xmas special">

for (let element of document.querySelectorAll(".xmas")) {
    //console.log(element);
    //改寫法會將只要 class 有 xmas 都會拿出來

    /* 最常用的是 
     * document.getElementById()
     * document.querySelector()
     * document.querySelectorAll()
     */

    // methods
    const hi = document.createElement('p');
    element.appendChild(hi);
    /* 就著每個 xams 的 element 再 appendChild(), 將一些 html 擺入去, 擺一些新的 element 入去
     * 為甚麼要擺一些新的 element 入去呢? 因為要用 document model, 即是用 document 去做一些 object 出來
     * document.createElement('p'); 透過 document 製造一個 p 出來, 
     * 再從取得的 let element of document.querySelectorAll(".xmas"), 
     * 在每個 element 裡面, 透過 appendChild 將 p 塞入去
     * appendChild() 即是疊上去的意思
     */

    // element.remove();
    // 可透過 element.remove(); 移除新創造的 'p'






    //properties
    console.log(element.innerHTML);
    /* return 得到每個 xmas 的 class 裡面是甚麼, 即是 <p>Hello</p>
     */






    //events

    // 當發生 click 事件後, 就會執行 function(){}
    /* 就住每一個 .element 發生有 event 的時候,  就是一個聆聽者
     * 當每一個 xmas 被點擊時, 就會告訴我, 所以先拿到 xmas
     * 該 method - element.addEventListener("") 有兩個參數 parameter
     * 第一個 parameter 是關於事件 'click', 第二個 parameter 是 function()
     * 
     */
    element.addEventListener("click", function() {
        alert('You clicked xmas!')
            //element.innerHTML = 'Merry Chrismas~~~';
        element.innerHTML = element.innerHTML + '<div class = "hi">Merry Chrismas~~~</div>';
        /* 該 element.innerHTML + 的方法則是可以無限地新增新的 element
         * 但該方法會形成, 刪除了, 再重建, 再刪除, 再重建的問題
         */

        //element.innerHTML = '<div class = "hi">Merry Chrismas~~~</div>';
        // 透過 <div class = hi></div> 更可在 html 創建一個 element出來
        /* 可用 element.innerHTML 更改 每個 xmas 的 class 內的內容
         * 例如該題是將 Hello 轉為 Merry Chirsmas~~~ 
         */

        /* 透過用 :last-child 可以在 hi 該 element裡, 獲得最後的那一個
         * 而如果你要得到所有的 element 都有 new hi, 
         * 就需要使用 for loop 用 addEventListener 來操作
         */
        // element.querySelector(".hi:last-child").addEventListener("click", function() {
        //     alert('new hi!')
        // });
        //querySelector() 也可以從上面的 element 裡面獲取 element, 不只是從最上面獲取

        //element.remove(); // 可在發生 click 事件後, 再將 p 移除

        for (let element of document.querySelectorAll(".hi")) {
            element.addEventListener("click", function() {
                alert('new hi!')
            });
        }
    });
}

for (let element of document.querySelectorAll(".hi")) {
    element.addEventListener("click", function() {
        alert('hi!')
    });
}