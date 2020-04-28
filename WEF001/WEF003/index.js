//第一種 declaration function
// 如果將console.log(add(1,2));擺在最上面亦可行, 但是該寫法較老派, 這是一種 hoisted function
function add(first,second){ // function body
    return first+second;
}

console.log(add(1,2));


//第二種 declaration function - function as a first class citizen
const add2 = (first,second)=>{ //如果不寫function就要加上該符號 =>
    return first + second;
}


//如果將console.log(add2(2,3));擺在最上面則會產生錯誤, 因為要先定義variable, 要由上至下運作才可正常地運作
//該種寫法是一個 special case of the above one
const add2Alternative = (first,second)=>first+second;


//第三種 arrow function (箭頭函數) and anonymous (匿名) function
const square = num => num * num;
// anonymous function
const square2 = function(num){
    return num * num;
}
//而所謂的return value of 一個function即是表示, 當你evaluate某個invocation時, call一個function返回的數值, 就是代表return value
const square3 = (num) => {
    return num * num;
}
// 以上三款(square&2&3)是一樣的, 於以上寫法三款funtion都是做同樣的操作, 沒有任何分別

console.log(add2(2,3));
console.log(add2Alternative(2,3));

//function與一個普通的Data無分別, 亦可以assign 或 assign入const
const anotherAdd = add2;
console.log(anotherAdd(20,30));



/* function sumOfArray(array) { //該function多於一句, 所以不可寫成如此式的special case :const add2Alternative = (first,second)=>first+second; 

    let sum = 0;
    for(let num of array){
        sum += num;
    }
    return sum;
}
*/

// 以上寫法亦可被 arrow function 版本取代, 兩種版本均沒有分別



const sumOfArray = (array)=>{
    let sum = 0;
    for(let num of array){
        sum += num;
    }
    return sum;
}

console.log(sumOfArray([1,2,3,4,5,6]));
//!!重點!!!: Call function 於 JavaScript 必須加上括號
//!!重點!!!: JavaScript的function 有Naming Convention(命名規格), 全部統一用 Camel-Case, 不可用 _ 符號或小寫取代!!

//從0-1給予一個隨機的數目
console.log(Math.random());

//計算sin的數值
console.log(Math.sin(Math.PI));

//Math.ceil & Math.floor是最經常用於random number的東西
//Math.ceil是用於表示最接近大於某數值的整數, 但並不是取四捨五入
console.log(Math.ceil(1.233));
//Math.floor是用於表示向下的負數, 取最接近大於某數值的整數, 但並不是取四捨五入
console.log(Math.floor(-1.233));


//Parsing Function: 一定是由String變成某些東西, 例如是由Parsing轉為 Int 或 float 
//包括兩種: parseInt(mathStrig): To parse string into integer 及 parseFloat(mathString): To parse string into float
console.log(parseInt("6174"));
if (isNaN(parseInt("hello"))){      //測試一個不是數目字的值,只可以用該方式去測試
    console.log("Not a Number!!!"); //測試一個不是數目字的值,只可以用該方式去測試
}

console.log(parseFloat("6174"));




// setTimeout() 表示只做一次, 想於某個秒數後做一樣東西 and setInterval() 表示於每幾多秒做一樣東西 例如:每3秒就檢查某個數字有多少
setTimeout(function(){
    console.log("This is after 1 second!!");
},1000);

const intervalId = setInterval(function(){ //intervalId就可以停止該項目不停地每秒運作
    console.log("This is every 1 second!!");
    clearInterval(intervalId);
},1000);
console.log("This happens before the setInterval")




// Windows Function
alert("Hello"); //只是提示你一個訊息
// prompt("May I know your name?"); //取一個value回來, 如問問題
const result = prompt("May I know your age?");
console.log(result);

const areYouSure = confirm("Are you sure?");//關於true or false
console.log(areYouSure);

// 以上三樣的 Window Function都非常少用