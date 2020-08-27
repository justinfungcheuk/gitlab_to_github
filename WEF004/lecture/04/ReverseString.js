// Exercise 1: Reverse String
// Write a function to reverse a string
// For example:
/* 
function reverseString(){

}

reverseString("cool") // looc
*/

// 可以做 array reverse(), 但不可以 string reverse
// "cool".split("")就會變成一個有4個element的東西 -> 即是: ["c", "o", "o", "l"]
// "cool".split("").reverse() 就會變成調轉排列的形式 -> 即是: ["l", "o", "o", "c"]
// "cool".split("").reverse().join("") 就會變成"looc"轉換的形式 -> 即是: "looc"
function reverseString(input) {
    return input.split("").reverse().join("");
}

reverseString("cool") // looc

// 另一種寫法 reduce也可以
function reverseStringByReduce(input) {
    // accumulator (累加器/積聚者), char (字符) 代表逐個逐個字母/即是: 每個每個charator
    input.split("").reduce((acc, char) => { // acc 是 accumulator, char 代表逐個逐個字母
        return char + acc; // char + acc 代表 將原本後面的charator不斷駁去前面, 即是: 每個每個字母第一個擺最後, 再不斷擺去前面
    }, "");
}

//以下方式是取出Maximum的數字 9
[6, 5, 4, 3, 2, 9, 8].reduce((acc, num) => {
    return acc > num ? acc : num;
}); //先用 6 和 5 比較, 再將較大的 6 和下一個再比較, 如此類推

////以下方式是取出Minimum的數字 2
[6, 5, 4, 3, 2, 9, 8].reduce((acc, num) => {
    return acc < num ? acc : num;
});