// Declaration of Class and its methods
class Player {

    constructor(strength, name) {
        this.strength = strength;
        this.name = name;
    }


    attack(monster) {
        // attack 代表將自己的 strength 擺入別人的 injure 裡

        /* 由於是 A [CRITICAL] attack may happen randomly and the attack will give a doubled damage.
         * 所以需要在 attack 處理, 而不是在 injure, 因為它們屬於兩種事物
         */
        if (Math.random() > 0.8) {
            // Math.random() > 0.8 代表只有兩成的機率會產生 doubled damage

            monster.injure(this.strength * 2) // this.strength*2 代表雙倍攻擊
                // 上面的寫法代表 我的 strength 是甚麼, injure 就是甚麼
            console.log(`Player ${this.name} attacks a monster (HP: ${monster.hp}) [CRITICAL]`);
            /* 當中的 ${monster.hp} 是代表讀取, 但不可以更改該 monster 的 hp
             * 所以 hp 是可以 read, 但不要更改它的 hp   
             */
        } else { // 該 else 代表如不屬於上面的情況, 就會變成正常傷害
            monster.injure(this.strength)
            console.log(`Player ${this.name} attacks a monster (HP: ${monster.hp})`);
        }
    }



    gainExperience(exp) {

    }

}


class Monster {
    constructor(hp = 100) {
        this.hp = hp;
    }

    // Think of how to write injure
    injure(strength) {
        //injure(strength) 代表 該 strength 是多少就扣多少血

        //     if (this.hp < strength) {
        //         // 如果該 monster 的 hp 是少於 strength時, 它的 hp 就會直接等於 0, 而不會扣至負值
        //         this.hp = 0;
        //     } else {
        //         this.hp -= strength;
        //         // -= 代表 this.hp = this.hp - strength;
        //     }

        //同上一樣的功能, 更簡短的寫法, 避免 strength 超過 0, 變為負數
        this.hp -= Math.min(strength, this.hp);
        // Math.min() 代表從參數中取其最小的值
    }
}

class Game {
    constructor(player, monster) {
            // 該 player 及 monster 代表參與該場 Game 的物體

            this.player = player;
            this.monster = monster;
        }
        /* 由於 constructor無論如何都會運作, 所以我們通常會將 Data 儲存於一個正常的狀態, 預備所有需要的數據, 即是在 constructor 內
         * 但如果將上面的 player 和 monster 擺放到 start() 內, 則會造成如你不 call 該 start()都不會開始遊戲
         */

    start() {
        //將該 while loop 寫在 start() 內, 代表當你有了 new Game 後, 就開始操作
        while (this.monster.hp > 0) {
            //當 monster 的 hp 大於 0 時, 就繼續攻擊, 攻擊到 monster 死亡為止
            this.player.attack(this.monster);
        }
    }
}

// Invocations of the class and its methods
const player = new Player(30, 'Peter');
//該 new player 有兩個 parameter, 其中 100 是一個 string 代表它的 strength, 第二個 'Peter' 是屬於 name
const monster = new Monster();
/*該 Monster 沒有設定任何東西, 但它是有 hp 的, 
 *所以需要自己在 constructor 聲明, 自己為它加上一個 value, 即是 this.hp = 甚麼
 */

const player2 = new Player(40, "Justin");

const game = new Game(player, monster);
game.start(); // 代表 action the game!!!
// 由於 player2 將 monster 傷害至 0, 所以導致 player 不能再攻擊 monster, 因此不會有任何顯示傷害

const game2 = new Game(player2, monster);
game2.start();