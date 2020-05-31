/*  是一個 variable, 是一個 Global, 在browser運作時可以拿到的一個variable, 稱為document*/
// console.log(document.getElementById('abc')); // 於JS的世界去拿取html的資料, 該console.log會拿取 html內的 <div<div id="abc"></div> */

const arr=[1,2,3];
const newArr = arr.map(function(x) { // 該寫法是將 const arr=[1,2,3];的每一個 element [1,2,3]都+1
// 給予一個指令 function(x), 當每一個 element要運作時就 call 該 function(x), 將該運作處理為 x / 將果舊野塞黎做 x;
    return x + 1; // 然後再 return 一個答案出來
}); // 這些 .map/.reduce/.filter於querySelectorAll('')所製造出來的好似array的array是不提供的!!!即是不適應於querySelectorAll('')

// document.querySelector('#abc'); // # 代表 id, 拿取 html 的 <div id="abc"></div>
// document.querySelector('.special'); // . 符號代表 class, 拿取 html的<div class="xmas special">
// document.querySelector('div.special p'); // 代表拿取 html的 <div class="xmas special"> 和 <p>Hello</p>
// 以上所有都只是拿取一個html的值

/*
document.querySelector('html').addEventListener('click', function() {
    alert('You clicked HTML!')
}); 該寫法可以同時顯示出兩個 alert 一個是 You clicked xmas 和 HTML
*/

// 而document.querySelectorAll('')是拿取所有於 html 內的 xmas 的值
for (let element of document.querySelectorAll('.xmas')) { // 該方式可以逐個逐個將　element 運作出來
    console.log(element);
// 最常用的是 getElementById('') / querySelector('') 和 querySelectorAll('')
//  這些 element 都會有一些特性 如下:  例如: 早前提及的 string 和 number 及 array, 如array有很多不同的method - .map / filter/ reduce 及 array的properties 就是.link

// methods
// 為甚麼要擺一些新的 element 入去, 就要用返 document object model, 即是用 document 去做一些 object出來
// const hi = document.createElement('p');
// 為甚麼要擺一些新的 element 入去, 就要用返 document object model, 即是用 document 去做一些 object出來
// element.appendChild(hi); // append上去, 代表疊上去
// element.remove();  // 可以將該appendChild消失, 也是一個 method

// properties
console.log(element.innerHTML); // 該寫法會將html內的所有內容包含甚麼就會return出甚麼內容出來


// (比較早前提及的array)多了該項目!) events (稱為事件)
element.addEventListener('click', function() { //該寫法是一個 method 表示就住每一個當 element 發生有 event 的時候, 我就是一個聆聽者
    // 為何上面會擺一個 function 呢? 因為是表示未發生的, 只是先告訴你, 當發生的時候就運作該指令 function() {}; 而如果沒有發生 click, 就永遠不用運作
       alert('You cliced xmas!')
       //element.innerHTML = 'Merry Christmas!'; // 該寫法可將 body內的<p>或所有內容, 當你點擊Hello時,就會更改為 Merry Christmas!, 即是用inner HTML把內部的資料變成了所 assign 的 variable, 再assign做string
       element.innerHTML = element.innerHTML + '<div class="hi"> Merry Christmas!</div> '; // 該innerHTML的<div>會給予一個 element給你
       // element.innerHTML + 是當你按下@_@時,會不斷重複新增Merry Chirstment!
       // 前面的功能消失了,是因為用了element.innerHTML的功能是會重新刪除再裝回去, 即是將原本有的 EvenListener都刪除了

       // element.remove(); // 可以將 Hello 消失, 按下了clicked之後, hello就會消失

 /*      element.querySelector('.hi:last-child').addEventListener('click', function() {
       // ('.hi:last-child')是可以從以上的element內的.hi的class內,尋找最後的一個
        alert('new hi!');
    });
*/

// 重新做一次 for 的 new hi就會出現new hi , 因為用了 element.innerHTMl 就會把EventListener的功能被消失了
    for (let element of document.querySelectorAll('.hi')) {
        element.addEventListener('click', function() {
            alert('new hi!')
        });
     }
   });
}


/*以下寫法不會重複出現alert('hi!'), 
因為當我for (let element of document.querySelectorAll('.hi')) {時, 
    return的就只有@_@的element存在, 
    而後加上去的element.innerHTML = '<div class="hi"> Merry Christmas!</div> ';是未出現的, 
    所以下列for的所有程式就不會發生該新加上去的element.innerHTML = '<div class="hi"> Merry Christmas!</div> '
    如果你要加該寫法, 就必須於其出世後才可加上去.
*/
for (let element of document.querySelectorAll('.hi')) {
    element.addEventListener('click', function() {
        alert('hi!')
    });
}
 