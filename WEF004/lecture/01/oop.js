// Web Fundamentals with JS - Javascript Classes

class Human {
    // Constructor 例如: 可用constructor (構造函數/建造者) 表示人類一出世就會如何怎麼樣之類
    constructor(weight, money) { // 可為constructor()的括號內添加不同的參數 如此例: weight及money為例
        // v object/instance  // 該this亦可指object 或 稱為 instance (實例/情況)
        this.weight = weight; // instance attribute/peoperty
        // this可代表那個人的體重, 並不是指人類 
        // this.符號來拿取該weight
        this.money = money;
    }

    // Method, 於class入面的eat()代表了是 function, 所以不用寫function來表達
    eat() { // instance method
        if (this.money >= 20){ // 但在做下一步eatWith(friend)前, 必須檢測一下關於money的值是否大於20, 大於就食飯, 否則不吃飯
        this.weight += 1;
        this.money -= 20;
        }
    }

    eatWith(friend) {
        this.eat();
        friend.eat();
    }

    walk() { // instance method
        this.weight -= 1;
    }

// class method
static extinct(){ // static extinct(絕種) 指全人類的意思

    }
}

//                     vvvvv 稱為 Superclass 父類別  
class Superman extends Human { // 使用 extends 來繼承人類所有的特質, 改寫人類的行為
    // vvvvvvv  稱為 subclass 子類別
    constructor(weight, money, codename) {
        super(weight, money)
        this.codename = codename;
    }

    // Override 人類的特質, 就會根據該新特質運作
    eat() {
        this.weight += 1;
        console.log(this.codename + " Eats THE FOOD!")
    }

    walk() {
        super.walk(); // 會返回到 lin 25運作 this.weight -= 1; 再運作 line 44 
        this.money += 1;
    }
}

const alex = new Superman(20, 20, "Alexman"); //const只是指向該object, 並不代表不可改變
/* human.extinct();
console.log(alex.weight); // 21
alex.walk();
console.log(alex.weight); // 20
*/
const gordon = new Human(15, 5000);
/* gordon.eat();
console.log(gordon.weight); // 16
gordon.walk();
console.log(gordon.weight); // 15
*/
//對付javascript object能夠做到的事項, 運用class 顯生出來的object一樣能夠做到

alex.eatWith(gordon); // 當中的alex指的是this.eat() (line:18), 而gordon指的是friend.eat() (line19)
console.log(alex.weight, alex.money);
console.log(gordon.weight, gordon.money);
gordon.eatWith(alex);


// Web Fundamentals with JS - Javascript : Built-in Helper Method
const num = 1;
num.toFixed(2); // toFixed() 是可用於展示價錢的


