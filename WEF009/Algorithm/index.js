// Sorting - Time complexity & Big-O -->
// O(n) 是 (n) 代表 number of element. 例如: 如果有20個element, for loop就會運行 20次  -->
// O(n^2) 是 (n^2) 代表 number of element * number of element -> products.push(elem1*elem2). 例如: 如果有100個element, for loop就會運行 10000次  -->
const arr = [1,2,3,4,5,6];
const products = [];
for(let elem1 of arr){
    for(let elem2 of arr){
        products.push(elem1*elem2)
    }
}
// 以上例子會運行36次
// Big-O notation 只會留最大的term 例如: O(n^3 + n^2) 只會留 O(n^3)-->

// Comparison Sort
[1,2,3,4,5,6].sort(function(first,second){
    return second - first;
});
// 在該編碼上 return 的數是 1, 表示 1 大於 2 , 越排越大, 越佐越小, 所以排序就是 [6,5,4,3,2,1]
[1,2,3,4,5,6].sort(function(first,second){
    return first - second;
});
// [1,2,3,4,5,6]

// Non-comparison sort
// 因為 comparison sort是有個大限的, 因為worst-case永遠都不能夠優勝於 O(nlog(n))
100 * Math.log(100) // worse case 不會優勝於該編碼

// Quicksort 最好的計算排序法
function quicksortBasic(array) { // quicksortBasic 在function入面 call回自己 即是 recursion　循環
    if(array.length < 2) {
    // base case
      return array;
    }
  
    const pivot = array[0];
    const lesser = [];
    const greater = [];
  
    for(let i = 1; i < array.length; i++) {
      if(array[i] < pivot) {
        lesser.push(array[i]);
      } else {
        greater.push(array[i]);
      }
    }
  
    return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
  }

  // factorial (因子/階乘)
  // 0! = 1
  // 1! = 1
  // 2! = 2 x 1!      // !表示factorial 
  // 3! = 3 x 2!
  // 4! = 4 x 3! 因為 4! = 4 x 3 x 2 x 1, 亦即是 4! = 4 x 3!, 所以使用 recursion function就可以做到該效果
  function factorial(n){
      if(n == 0 || n == 1){ // 該 if 非常重要, 稱為 Base case of recursion function 因為 recursion function 一定是　base case. 因為不是base case的話，就會永遠運作，不停停止
          return 1;         // base case 表示 幾時要停, 但一定會有條路去return一個值
      }
      // 一定有一個 recursive case 是運作停頓的
      return n* factorial(n-1);
  }
  console.log(factorial(10));
// 以上結果會等於 3628800 即是等於 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1