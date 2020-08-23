// const accumulator = function(num) {
//     this.sum += num;
//     console.log(`Accumulator ${this.name} is being added with ${num}!`);
//     return this.sum;
// }

//以下的閉包和上面的 this 是類似的
// Closure 閉包
// function accumulator() {
//     let sum = 0;

//     return function(num) {
//         sum += num;
//         return sum;
//         /* 以上寫法是有一個 accumulator, 然後 call 了它之後會 return 一個 function 給你
//          * 當你每次 call 它的時候, 都會拿到一個數字 num
//          * 該寫法的意思即是如何呢?
//          */
//     }
// } //上面就是 initial scope

//即是 該 acc 就是 return function, 所以該 return function 的 sum 就是依然可以聯繫到 let sum = 0;
//const acc = accumulator();
//acc(4);

//Using closure to build more complex behaviour
function accumulator() {
    let sum = 0;

    return {
        reset: () => {
            sum = 0;
            return sum
        },
        add: (num) => {
            sum += num;
            return sum;
        },
        result: () => {
            return sum;
        }
    }
}
//const acc = accumulator();

//上面和下面的操作是一樣的, 它們的分別是:
//上面是透過 function 做一個 object 出來
//下面是透過 this

const acc = {
    sum: 0,
    reset: () => {
        this.sum = 0;
        return this.sum
    },
    add: (num) => {
        this.sum += num;
        return this.sum;
    },
    result: () => {
        return this.sum;
    }
}