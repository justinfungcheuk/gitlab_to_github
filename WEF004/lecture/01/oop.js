// Web Fundamentals with JS OOP Concepts - Javascript Classes - class method & instance method


/*
 * 以下 Classes 包含有三種東西
 * 第一種: 新的生命 constructor - class Human{ constructor(weight, money)}
 * 第二種: MEthod - 就是 method名 及 () 闊號 - 例如: eat() 或 walk()
 * 第三種: 如需要 call 個 method 就要用 object - 即是 object.Method Name(); 例如: alex.eat();
 * 第四種: 如要提取下題的 weight, 並不需要加上 weight() 闊號, 只需要 console.log(alex.weight); 即可
 * 以上為 class 的基本 systax(語法)
 */
class Human {
    // Constructor 例如: 可用constructor (構造函數/建造者) 表示人類一出世就會如何怎麼樣之類
    constructor(weight, money) {
        // 可為constructor()的括號內添加不同的參數 例如: weight及money為例
        // weight 表示人類一出世就會有體重 weight

        // v object/instance  // 該this亦可指object 或 稱為 instance (實例/情況)
        this.weight = weight; // instance attribute/property
        // this可代表那個人的體重, 並不是指人類 
        // this.符號來拿取該weight
        //所以逢是 object 都是該寫法 甚麼.甚麼 承上是 this.weight

        this.money = money;
    }

    // Method
    //於class入面的eat()代表了是 function, 所以不用寫function來表達
    eat() { // instance method
        //逢是如此 define 的, 如 eat(){} 或 walk(){} 都是只適用於個體的

        if (this.money >= 20) {
            // 先檢測一下金錢 money 是否大於 20, 如果大於就吃飯, 少於就不吃
            // 在做下一步eatWith(friend)前, 必須檢測一下關於money的值是否大於20, 大於就食飯, 否則不吃飯
            this.weight += 1;
            this.money -= 20;
        }
    }

    eatWith(friend) {
        //表示與一個朋友吃東西
        this.eat(); //該 this 代表指向自己, 即是alex及gordon
        friend.eat(); // 該 friend.eat(); 指的是朋友也要吃東西的意思
    }

    walk() { // instance method
        this.weight -= 1;
    }

    // class method, 可透過該 method 去執行全人類
    static extinct() { // static extinct(絕種) 指全人類的意思

    }
}

//                     Human 可稱為 Superclass 父類別  
class Superman extends Human {
    // 使用 extends 來繼承人類所有的特質, 改寫人類的行為
    // Superman 可稱為 subclass 子類別
    constructor(weight, money, codename) {
        super(weight, money)
        this.codename = codename;
        /* 將該this.coename = codename 為 alex 轉成 "Alexman"
         * 為 alex 更改一個新稱號 Alexman
         */
    }

    // Override 人類的特質, 就會根據該新特質運作
    eat() {
        this.weight += 1;
        console.log(this.codename + " Eats THE FOOD!")
    }

    walk() {
        super.walk();
        //使用 super.walk(); 當中的 super. 是可以 call 回它的父類別 Supercall, 即是繼承了父類別的特質
        //所以該 method - walk() 就會透過操作 super.walk(); 及 this.money += 1; 來為 alex 步行時增加 1個money 
        this.money += 1;
    }
}
// 要誕生一個新的 object 就要使用 new 該 keyword, 承下題: new Superman(); 代表一個新生命
// 但是需要為 new 用一個 variable (如下面的 const alex) 去裝起它, 例如是: const alex = new Superman();
const alex = new Superman(20, 20, "Alexman"); //const只是指向該object, 並不代表不可改變
//const alex = new Human(20, 20);
/* human.extinct(); 該寫法的意思是: 指全人類絕種
 * 如果寫成 Human.eat(); // eat is not a function
 * 因為 Human 即人類該類別是沒有吃東西 eat() 該method的
 * 因為必須有 new 的存在, 該 Human 才懂得吃東西, 但並不可以做到全人類一起吃東西, 只有個別人類才會吃東西及步行
console.log(alex.weight); // 21
alex.walk();
console.log(alex.weight); // 20
*/

// Human 是由 class 衍生出來的 object
const gordon = new Human(15, 5000);
/* gordon.eat();
console.log(gordon.weight); // 16
gordon.walk();
console.log(gordon.weight); // 15
*/
//對付javascript object能夠做到的事項, 運用class 顯生出來的object一樣能夠做到

alex.eatWith(gordon);
/* 當中的alex指的是this.eat(), 而gordon指的是friend.eat()
 * 所以 eatWith(friend){ // frined 所指的就是 gordon
     this.eat(); this.所指的就是 alex
     friend.eat(); friend.所指的就是 gordon
    }
 */
console.log(alex.weight, alex.money);
console.log(gordon.weight, gordon.money);
gordon.eatWith(alex);





// Web Fundamentals with JS - Javascript : Built-in Helper Method
const num = 1;
num.toFixed(2); // toFixed() 是可用於展示價錢的更佳方式
//如用 num.toFixed(2); 就會得出一個 "1.00" 的 string