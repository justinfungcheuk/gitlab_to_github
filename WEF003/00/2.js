//Bind function
function sum(first, second) {
    console.log(this.name); // 該 this.name 的結果是不會出現任何結果 
    // this 就是每一個 function 的一個自己 private 的 locker
    // this 經常用於 class
    return first + second;
}

//console.log(sum(2, 3));

// bing 的中文意思是 將一些東西結合一起
// Bind the object to the function sum, resulting a new function
const boundToGordon = sum.bind({ name: "Gordon" }, 4, 7);
//上面的這個 4 代表最前面的 first, 而 7 則代表 second
const boundToAlex = sum.bind({ name: "Alex" });

// 該 console.log會得到 Gordon 和 5 的結果
// 所以 bind的該object ({name: "Gordon"}); 就是 this 
// 上面的寫法是給予一個新的 function, 而它是 bind to 該 name: "Gordon"
// 甚麼稱為 bind to 呢? 即是將它當作為 function 結合一件東西

// Call bound function
//console.log(boundToGordon(2, 3));
console.log(boundToGordon()); //因為上面的 boundToGordon有4和7, 所以該結果會等於11
//console.log(boundToAlex(2, 3));
// 因此 Gordon 及 Alex 都是 console.log(this.name); 的結果, 而 (2,3) 則是它們 return 的值
//sum(2, 3); //該寫法仍然是沒有任何結果, 因此在最前面所寫的 function sum 的 console.log(this.name) ,沒有東西

// You can only store a value in `this` if the function is in the ordinary form that is function declaration
const accumulator = function(num) {
    this.sum += num;
    console.log(`Accumulator ${this.name} is being added with ${num}!`);
    return this.sum;
}

/* 以下寫法是 arrow function, 它與直接使用 function declaration 不同
 * 因為 arrow function 的 this 不是指住自己的那個, 並不是一個 private locker, 它的 this 是指向外面的 window
 * 所以必須使用原本的 function declaration 來操作 this
 */
// const accumulator = (num) => {
//     this.sum += num;
//     console.log(`Accumulator ${this.name} is being added with ${num}!`);
//     return this.sum;
// }

const acc = accumulator.bind({ sum: 0, name: "acc" });
acc(4);
console.log(acc);

const acc2 = accumulator.bind({ sum: 0, name: "acc2" });

// let 與 var 最大的分別就是, 
// block scope variable
function testLet(arr) {
    for (let num of arr) {
        console.log(num);
    } // 對於 let 而言, 該 num 只是存活於上面的 console.log(num), 而下面的則不存在
    // 因此它每運作一次, num 就是新的一個

    if (true) {
        let abc = 123;
    }
    def = 123;
    //該處的 let 是不能用到 abc = 123;
    console.log(abc);
};

// Function scope variable
function testVar(arr) {
    for (var num of arr) {
        console.log(num);
    } //對於 var 而言, 它在乎的是最接近的一個 console.log();
    console.log(num);

    if (true) {
        var abc = 1234;
    }

    console.log(abc);
};

function varClassicExample(arr) {
    /* 該方式的 var 會 print 出 5 個 5 出來, 為甚麼呢??
     * 因為 var 是同一個, 它是 bind to 該 scope{}
     * 而 console.log(num) 是 access 到該 var num of arr, 更因為它是 var,  所以它整個 for loop只是操作同一個,
     * 當你加起來的時候, 它就變成 5, 當1秒後就print了 5個都是5出來
     * 
     * 將 var num; 寫在此, 或寫在 for()入面是沒有分別的, 
     * 所以整個 for loop 都是用著一個 variable, 只有一個 num, 每個都是同一個 num
     * 當它每操作一個 loop 的時候, 操作到最後的數字 5 時, 所以用 setTimeout()得出的結果就是 5個都是5
     */

    //     for (var num of arr) {
    //         setTimeout(function() {
    //             console.log(num);
    //         }, 1000);
    //     }
    // }

    //而轉變成 let num of arr 則會得出 1,2,3,4,5, 情況完全不同
    for (let num of arr) {
        setTimeout(function() {
            console.log(num);
        }, 1000);
    }
}
// for loop 是不可以用 const, 只可以用 let
//總結以上的 var 和 let, 我們應選擇用 let, 而不是 var