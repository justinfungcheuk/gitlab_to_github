// Declaration of Class and its methods
class Player{

    constructor(strength,name){
        this.strength  = strength;
        this.name = name;
    }


    attack(monster){ // attack就是將自己的 string 擺入別人的injure裡
    const isCritical = Math.random()>0.8; // 代表如果是2倍的攻擊就是 Critical
    const multiplier = (isCritical?2:1)
    // injure actually calls three different injure based on different types of monster
    // 以上 behavior 稱為 Polymorpism 表示 同一個injure你call了三種不同的behavior 稱為 Polumorpism!!!
    monster.injure(this.strength * multiplier ,player);
        // 代表如果是Critical就出Critical的字, 不是Critical就出 empty string "" 代表無任何東西
        console.log(`Player ${this.name} attacks a monster (HP: ${monster.hp}) ${isCritical?"[CRITICAL]":""}`);
    }

    // 現在player是知道rareMonster的存在, 但不必知道它的存在, 可以當是一個monster就攻擊
    // instanceof代表dependence
    // if(monster.hp == 0 && monster instanceof RareMonster) { // monster.hp == 0 代表該怪物已經死亡
    // 如果該怪物是 RareMonster 就要 Call 返自己的 experience, 因為該 exp 是從 RareMonster 來的
    //    this.gainExperience(monster.exp);
    

    /*
    if(Math.random()>0.8){ // 有2成的機會造成2倍的傷害
        monster.injure(this.strength*2); //代表我的 strength 是多少就等於 injure 多少
        console.log(`Player ${this.name} attacks a monster (HP: ${monster.hp}) [CRITICAL]`) // read 讀取 name 和 hp 是可以的, 但不要更改該 hp
    }else{ // 否則就變回正常傷害
        monster.injure(this.strength);
        console.log(`Player ${this.name} attacks a monster (HP: ${monster.hp})`)
    }
}
*/


    gainExperience(exp){
        this.strength += exp; // 無論 exp 是如何打入來, 都是加回該數目
        console.log(`Player ${this.name} gains ${exp} strengh`);
    }

}


class Monster{ // 因為monster要有hp, 所以必須加上constructor
    constructor(hp = 100){ 
        this.hp = hp;
    }
    // Think of how to write injure

    injure(strength){ // injure(strength) 代表扣幾多 hp
        this.hp -= Math.min(strength,this.hp); // Math.min 無論給予任何數字,都會取最小值的數值
    }
}

        /*        if(this.hp < strength){ // 用該方式可以導致無論最後的傷害是50或更大, monster都會變成 0生命值
            this.hp = 0;
        }else{
            this.hp -= strength;
        // 以上的寫法等於該寫法-> this.hp = this.hp - strength;
        */

class RareMonster extends Monster {
    constructor(exp, hp = 150){
        super(150); // 如果是你自己創建的 extends 下的 constructor 就必須加上 super()
        this.exp = exp;
    }

    injure(strengh, player){ // player表示 獲取 Experience
        super.injure(strengh);
        if(this.hp == 0){
            player.gainExperience(monster.exp); // 定義 player 獲取 Experience
        }
    }
}

class BossMonster extends Monster {
    constructor(hp = 200){
        super(hp);
        this.halfHp = hp / 2; 
    }

    injure(strengh){
        if(this.hp < this.halfHp){
            super.injure(strengh/2);
        }else{
            super.injure(strengh);
        }
    }

}

class Game{ // 代表 player 和 monster 於 Game 的平台開始運作
    constructor(player,monster){
        this.player = player;
        this.monster = monster;
    }

    start(){
        while(this.monster.hp > 0){ //使用 while 來運作攻擊 monster直到變成 0 為止
            player.attack(this.monster); // 導致 -20 的產生, 可從line 30的injure(strength)內增加if和else來導致monster的傷害最大值最終是等於0
        }
    }
}

// Invocations of the class and its methods
const player = new Player(30,'Peter');
const monster = new BossMonster(200); // 如果monster()不寫任何數值就代表100(因為constroctor(hp = 100), 如果要更改其數值可寫成, 例子: monster(200)


const game = new Game(player,monster);
game.start(); // action!!

/*
while(monster.hp > 0){ //使用 while 來運作攻擊 monster直到變成 0 為止
    player.attack(monster); // 導致 -20 的產生, 可從line 30的injure(strength)內增加if和else來導致monster的傷害最大值最終是等於0
}
*/
// English counterpart: Player attacks monster