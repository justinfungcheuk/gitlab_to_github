// Declaration of Class and its methods
class Player {

    constructor(strength, name) {
        this.strength = strength;
        this.name = name;
    }


    attack(monster) {
        // attack 代表將自己的 strength 擺入別人的 injure 裡

        // 當 Math.random() 是 true 時, 就等於 2 該 value, 否則就是 1
        const isCritical = Math.random() > 0.8;
        const criticalMultiplier = (isCritical ? 2 : 1);
        const elementMultiplier = ELEMENT_MULTIPLERS[monster.type];

        // injure actualy call three different injure base on different types of monster
        // 上面的效果稱為: Polymorphism 
        monster.injure(this.strength * criticalMultiplier * elementMultiplier, player); // player擺放在 injure 代表是由該 player 去攻擊 monster
        console.log(`Player ${this.name} attacks a monster (HP: ${monster.hp}) ${isCritical ? "[CRITICAL]" : ""}`);

        /* 檢查 monster 有沒有死亡 
         * 如果 monster == 0 即是死了 和 它是一個 RareMonster
         * 就 call 回自己的 gainExperience, 因為 Experience 是由 RareMonster得來的, 所以要寫上 monster.exp
         * 全句就是 this.gainExperience(monster.exp);
         */
        // if (monster.hp == 0 && monster instanceof RareMonster) {
        //     this.gainExperience(monster.exp);
        // }

    }

    /* 由於是 A [CRITICAL] attack may happen randomly and the attack will give a doubled damage.
     * 所以需要在 attack 處理, 而不是在 injure, 因為它們屬於兩種事物
     */
    //     if (Math.random() > 0.8) {
    //         // Math.random() > 0.8 代表只有兩成的機率會產生 doubled damage

    //         monster.injure(this.strength * 2) // this.strength*2 代表雙倍攻擊
    //             // 上面的寫法代表 我的 strength 是甚麼, injure 就是甚麼
    //         console.log(`Player ${this.name} attacks a monster (HP: ${monster.hp}) [CRITICAL]`);
    //         /* 當中的 ${monster.hp} 是代表讀取, 但不可以更改該 monster 的 hp
    //          * 所以 hp 是可以 read, 但不要更改它的 hp   
    //          */
    //     } else { // 該 else 代表如不屬於上面的情況, 就會變成正常傷害
    //         monster.injure(this.strength)
    //         console.log(`Player ${this.name} attacks a monster (HP: ${monster.hp})`);
    //     }
    // }



    gainExperience(exp) {

        // 無論 exp 是多少就加上多少 exp
        this.strength += exp;
        console.log(`Player ${this.name} gains ${exp} strength`);
    }

}


class Monster {
    constructor(hp = 100, type) {
        this.hp = hp;
        this.type = type;
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
    toString() {
        //透過 toString() 當你將object塞入String, 自動會操作一個 method, 自動將該 object 變成一個 string
        return "Normal Monster";
        /* 例如: const m = new Monster() , 
         * m.toString() 就會得到 "Normal Monster", 
         * `${m}` 就會得到 "Normal Monster"
         * 由你自己決定是甚麼
         */
    }
}

class RareMonster extends Monster {

    //因為 exp 會給予 player
    constructor(hp = 150, type, exp) { // 要 specific hp 再 specific exp
        //如果是自己決定寫的 constructor, 入面永遠必須要寫上 super();
        super(hp, type);
        //該 exp 並不需要更改 monster, 因為該 exp 只有 rareMonster 才擁有的, 而 monster 並沒有
        this.exp = exp;
    }

    injure(strength, player) { // player 獲得 exp
        super.injure(strength);
        if (this.hp == 0) {
            player.gainExperience(this.exp);
        }
    }

    //當有一個不同的 String, 你可以將它稱為你想命名的 String, 如下題將它命名為 "Rare Monster"
    toString() {
        //透過 toString() 當你將object塞入String, 自動會操作一個 method, 自動將該 object 變成一個 string
        return "Rare Monster";
        /* 例如: const m = new Monster() , 
         * m.toString() 就會得到 "Normal Monster", 
         * `${m}` 就會得到 "Normal Monster"
         * 由你自己決定是甚麼
         */
    }
}

class BossMonster extends Monster {
    constructor(hp = 200, type) {

        //該位置必須 call hp (屬於最上面 monster 的 hp), 因為不 call 會造成報錯
        super(hp, type);
        this.halfHp = hp / 2; // hp / 2 代表一半血
    }

    injure(strength) {
        if (this.hp < this.halfHp) { //如果 hp 少於一半就扣一半血, 否則就扣全血
            super.injure(strength / 2);
            //this.hp -= Math.min(strength / 2, this.hp);
        } else { //否則就扣全血
            super.injure(strength);
            //this.hp -= Math.min(strength, this.hp);
        }
    }

    //當有一個不同的 String, 你可以將它稱為你想命名的 String, 如下題將它命名為 "Rare Monster"
    toString() {
        //透過 toString() 當你將object塞入String, 自動會操作一個 method, 自動將該 object 變成一個 string
        return "Boss Monster";
        /* 例如: const m = new Monster() , 
         * m.toString() 就會得到 "Normal Monster", 
         * `${m}` 就會得到 "Normal Monster"
         * 由你自己決定是甚麼
         */
    }
}

// MONSTER_TYPES 表示基於有不同類型的 Monsters
const MONSTER_TYPES = [Monster, BossMonster, RareMonster];
const ELEMENT_TYPES = ["Water", "Fire", "Earth"];
const ELEMENT_MULTIPLERS = {
    "Water": 1,
    "Fire": 2,
    "Earth": 0.5
}

class Game {
    constructor(player) {
            // 該 player 及 monster 代表參與該場 Game 的物體

            this.player = player;
            //this.monster = monster;
            this.monsters = this.randomMonsters();
        }
        /* 由於 constructor無論如何都會運作, 所以我們通常會將 Data 儲存於一個正常的狀態, 預備所有需要的數據, 即是在 constructor 內
         * 但如果將上面的 player 和 monster 擺放到 start() 內, 則會造成如你不 call 該 start()都不會開始遊戲
         */

    start() {

        // 將 while loop 擺在 for loop 裡面代表每一個 monster 都要經歷同樣的東西 
        for (let monster of this.monsters) {
            console.log(`Player ${this.player.name} meets a ${monster} (HP:${monster.hp} Type:${monster.type})`);
            //將該 while loop 寫在 start() 內, 代表當你有了 new Game 後, 就開始操作
            while (monster.hp > 0) {
                //當 monster 的 hp 大於 0 時, 就繼續攻擊, 攻擊到 monster 死亡為止
                this.player.attack(monster);
            }
        }

    }

    randomMonsters() {
        const monsters = [];
        while (monsters.length < 3) {

            //代表取得某一隻類型 monster 出來
            const monsterType = MONSTER_TYPES[Math.floor(Math.random() * 3)];
            // *3 代表 0,1,2, 即是 MONSTER_TYPES 的 index 0,1,2
            const elementType = ELEMENT_TYPES[Math.floor(Math.random() * 3)];

            const hp = Math.floor(Math.random() * 100) + 100; // 代表 100 至 199

            const monster = new monsterType(hp, elementType, 100);
            monsters.push(monster); //每操作一次就多一個, 將需要得 monster 拿出來, 然後再 return monster
        }
        return monsters;
    }
}

// Invocations of the class and its methods
const player = new Player(30, 'Peter');
//該 new player 有兩個 parameter, 其中 100 是一個 string 代表它的 strength, 第二個 'Peter' 是屬於 name
//const monster = new BossMonster(200);
/*該 Monster 沒有設定任何東西, 但它是有 hp 的, 
 *所以需要自己在 constructor 聲明, 自己為它加上一個 value, 即是 this.hp = 甚麼
 */


const game = new Game(player);
game.start(); // 代表 action the game!!!

// 由於 player2 將 monster 傷害至 0, 所以導致 player 不能再攻擊 monster, 因此不會有任何顯示傷害