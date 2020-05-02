// Declaration of Class and its methods
class Player{

    constructor(strength,name){
        this.strength  = strength;
        this.name = name;
    }


    attack(monster){ // attack就是將自己的 string 擺入別人的injure裡
    if(Math.random()>0.8){ // 有2成的機會造成2倍的傷害
        monster.injure(this.strength*2); //代表我的 strength 是多少就等於 injure 多少
        console.log(`Player ${this.name} attacks a monster (HP: ${monster.hp}) [CRITICAL]`) // read 讀取 name 和 hp 是可以的, 但不要更改該 hp
    }else{ // 否則就變回正常傷害
        monster.injure(this.strength);
        console.log(`Player ${this.name} attacks a monster (HP: ${monster.hp})`)
    }
}


    gainExperience(exp){

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
const monster = new Monster(); // 如果monster()不寫任何數值就代表100(因為constroctor(hp = 100), 如果要更改其數值可寫成, 例子: monster(200)
const player2 = new Player(40, "Sam");

const game = new Game(player2,monster);
game.start(); // action!!

const game2 = new Game(Player,monster);
game2.start();
/*
while(monster.hp > 0){ //使用 while 來運作攻擊 monster直到變成 0 為止
    player.attack(monster); // 導致 -20 的產生, 可從line 30的injure(strength)內增加if和else來導致monster的傷害最大值最終是等於0
}
*/
// English counterpart: Player attacks monster