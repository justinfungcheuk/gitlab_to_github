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




// document.querySelector("#abc");
// console.log(document.querySelector("div.special p"));
// //該寫法可以找到 <p>Hello<p>
// document.querySelector(".xmas");
// //該寫法只會得到 第一個的 <div class="xmas special">

for (let element of document.querySelectorAll(".xmas")) {
    console.log(element);
}; //改寫法會將只要 class 有 xmas 都會拿出來

/* 最常用的是 
 * document.getElementById()
 * document.querySelector()
 * document.querySelectorAll()
 * 
 */