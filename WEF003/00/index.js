/* There are two phase of using Functions
 * 1. Function declaration 即是 declare 聲明, 表示只有一次 declare 聲明
 * 2. Function invocation  即是 invocation 調用, 表示可以 invocate 回調多少次都可以
 * 表示甚麼時候 call 該 function 及 甚麼時候 declare 某個 function, 兩部曲
 * 即是一個已經 declare 的 function 是可以經常去 call 它的 
 */

/* Function Declaration 有三種方法 */
/*第一種 declaration function
 * use keyword function with the function name
 */
// 如果將console.log(add(1,2));擺在最上面亦可行, 但是該寫法較老派, 這是一種 hoisted function
// 只有該寫法可將 console.log(add(1,2));擺在最上面亦可行, 下面的其他種類方法會報錯
function add(first, second) { // function body
    // add 代表 function 的名字
    return first + second;
}

console.log(add(1, 2));


/* 第二種 declaration function - function as a first class citizen
 * use a arrow => function formate to declare a new function
 */
const add2 = (first, second) => { //如果不寫function就要加上該符號 =>
        return first + second;
    } //該寫法是一個 assgin 的形式, 所以不適用於 console.log(add2(2,3)) 擺在它的前面, 否則會錯誤

//如果將console.log(add2(2,3));擺在最上面則會產生錯誤, 因為要先定義variable, 要由上至下運作才可正常地運作
//該種寫法是一個 special case of the above one
const add2Alternative = (first, second) => first + second;


//arrow function (箭頭函數) 又稱為 anonymous (匿名函數) function
const square = num => num * num;
// 因為上面該寫法只有一個參數 parameter, 所以可以直接把 num 寫出來而不用額外加上括號


// 該寫法就只是一個 anonymous function
// use keyword function without the function name
const square2 = function(num) {
        return num * num;
    }
    //而所謂的return value of 一個function即是表示, 當你evaluate某個invocation時, call一個function返回的數值, 就是代表return value
const square3 = (num) => {
        return num * num;
    }
    // 以上三款(square&2&3)是一樣的寫法,意義相同, 於以上寫法三款funtion都是做同樣的操作, 沒有任何分別

console.log(add2(2, 3));
console.log(add2Alternative(2, 3));

//function與一個普通的Data無分別, 亦可以assign 或 assign入const
/* 可以 add2 該 function, assign入去另一個 variable內, 它都可以成為一個 function, 
 * 所以可以再 call 它這個function, 用 console.log(anotherAdd(20, 30)); 來 再call
 */
const anotherAdd = add2;
console.log(anotherAdd(20, 30));




function sumOfArray(array) { //該function多於一句, 所以不可寫成如此式的special case :const add2Alternative = (first,second)=>first+second; 

    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum;
}
console.log(sumOfArray([1, 2, 3, 4, 5, 6]));

// 以上寫法亦可被 arrow function 版本取代, 兩種版本均沒有分別
// const sumOfArray = (array) => {
//     let sum = 0;
//     for (let num of array) {
//         sum += num;
//     }
//     return sum;
// }

// console.log(sumOfArray([1, 2, 3, 4, 5, 6]));

/* Function Invocation
 * To call this function, we can easily call the function by adding a pair of () which is the (括號)parentheses to put the parameters
 * 1. sumOfArray([1,2,3,4]);  //We are passing an array as a parameter.
 * 2. sumOfArray()            //If we pass in nothing, array is null
 * 3. sumOfArray              //This only refer to the function itself. not calling the function
 * 4. const func = sumOfArray //We can even assign a function to a different variable 
 * !!重點!!!: Call function 於 JavaScript 必須加上括號
 * 
 * !!重點!!!: JavaScript的function 有Naming Convention(命名規格), 全部統一用 Camel-Case, 不可用 _ 符號或小寫取代!!
 */


// Math Functions

//從0-1給予一個隨機的數目
console.log(Math.random());

//計算sin的數值
// PI: This is the ratio (比例/比率) of the circumference (圓周) of a circle to its diameter (直徑).
console.log(Math.sin(Math.PI));

//Math.ceil & Math.floor是最經常用於random number的東西
//Math.ceil是用於表示最接近大於某數值的整數, 但並不是取四捨五入
console.log(Math.ceil(1.233)); // 例如 1.233 就得出向上 2

//Math.floor是用於表示向下的負數, 取最接近大於某數值的整數, 但並不是取四捨五入
console.log(Math.floor(-1.233)); // 例如 負數 -1.233 就得出向下 -2

//Math.floor((Math.random) * (max + 1)) + min // 因為是 Math.floor 就使用 max + 1 , 但如果是 celi就不用 +1
Math.floor((Math.random) * (9 + 1)) + 2; //該寫法是想要有多少個數字, 該結果最大的數目是11個



//Parsing Function: 一定是由String變成某些東西, 例如是由Parsing轉為 Int 或 float 
/*包括兩種: 
 * parseInt(mathStrig): To parse string into integer 
 * 及 parseFloat(mathString): To parse string into float(浮點數)
 */
console.log(parseInt("6174"));
console.log(parseInt("hello")); // 得到 NaN 的結果

if (isNaN(parseInt("hello"))) { //測試一個不是數目字的值,只可以用該方式去測試
    console.log("Not a Number!!!"); //測試一個不是數目字的值,只可以用該方式去測試
}

console.log(parseFloat("6174.23")); // parseFloat 是將整數後面的小數點數字也獲取
console.log(parseInt("6174.23")); // parseInt 是將整數後面的小數點排除 或 其他不是數目字的都排除在外

//也可將 numer 轉為 string, 有兩種方法 例子如下:
//第一種方法 toString()
const num = 123456;
num.toString();
//第二種方法 加上 "" 雙引號
123 + ""



//setTimeout() and setInterval()
/* setTimeout() 表示只做一次, 想於某個秒數後做一樣東西 and setInterval() 表示於每幾多秒做一樣東西 
 * 例如:每3秒就檢查某個數字有多少
 * setTimeout() is a function that allows you to run a function after a certain period of time. 
 * Here is one example:
 */
setTimeout(function() {
    console.log("This sentence only prints once after 1 second/1000ms!!");
}, 1000);

setInterval(function() {
    console.log("This sentence prints periodically per second.");
}, 1000);

const intervalId = setInterval(function() {
    //intervalId就可以停止該項目不停地每秒運作
    console.log("This is every 1 second!!");
    clearInterval(intervalId);
    // 透過使用 clearInterval(intervalId) 來停止 setInterval() 1000毫秒的每次運算
}, 1000);
console.log("This happens before the setInterval")
    //該 console.log會比setInterval()更早運作, 因為 setInterval()需要1秒後才運作, 但0秒也是該 console.log先運作

//另一例子, 如果想數到 10 就停止該操作的寫法
// let counter = 1;
// const intervalId = setInterval(function() {
//     console.log("This is every 1 second");
//     if (counter >= 10) {
//         clearInterval(intervalId);
//     }
//     counter++;
// }, 1000);
// console.log("This happens before the setInterval");



// Windows Function
alert("Hello"); //只是提示你一個訊息
// prompt("May I know your name?"); //取一個value回來, 如問問題
const result = prompt("May I know your age?");
console.log(result);

const areYouSure = confirm("Are you sure?"); //會返回 true or false
console.log(areYouSure);
// 以上三樣的 Windows Function都非常少用