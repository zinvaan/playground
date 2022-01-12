const $startScreen = document.querySelector('#start-screen');
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');
const $heroName = document.querySelector('#hero-name');
const $heroLevel = document.querySelector('#hero-level');
const $heroHp = document.querySelector('#hero-hp');
const $heroXp = document.querySelector('#hero-xp');
const $heroAtt = document.querySelector('#hero-att');
const $monsterName = document.querySelector('#monster-name');
const $monsterHp = document.querySelector('#monster-hp');
const $monsterAtt = document.querySelector('#monster-att');
const $message = document.querySelector('#message');

class Game{
    constructor(name){
        this.monster = null;
        this.hero = null;
        this.monsterList =[
            {name: '슬라임', hp: 25, att: 10, xp: 10},
            {name: '스켈레톤', hp: 50, att: 15, xp: 20},
            {name: '마왕', hp: 150, att: 35, xp: 50},
        ];
        this.start(name);
    }
    start(name){
        $gameMenu.addEventListener('submit', this.onGameMenuInput);
        $battleMenu.addEventListener('submit', this.onBattleMenuInput);
        this.changeScreen('game');
        this.hero = new Hero(this,name);
        this.updateHeroStat();
    }
    changeScreen(screen){
        if(screen === 'start'){
            $startScreen.style.display = 'block';
            $gameMenu.style.display = 'none';
            $battleMenu.style.display = 'none';
        }
        else if (screen === 'game'){
            $startScreen.style.display = 'none';
            $gameMenu.style.display = 'block';
            $battleMenu.style.display = 'none';
        }
        else if (screen === 'battle'){
            $startScreen.style.display = 'none';
            $gameMenu.style.display = 'none';
            $battleMenu.style.display = 'block';
        }
    }
    onGameMenuInput = (event) =>{
        event.preventDefault();
        const input = event.target['menu-input'].value;
        if(input === '1'){ // 모험
            this.changeScreen('battle');
            const randomIndex = Math.floor(Math.random() * this.monsterList.length);
            const randomMonster = this.monsterList[randomIndex];
            this.monster = new Monster(
                this,
                randomMonster.name,
                randomMonster.hp,
                randomMonster.att,
                randomMonster.xp,
            );
            this.updateMonsterStat();
            this.showMessage(`몬스터와 마주쳤다. ${this.monster.name}인 것 같다!`);
        }
        else if(input === '2'){ // 휴식
    
        }
        else if(input === '3'){ // 종료
            this.quit();
        }
    }
    onBattleMenuInput = (event) =>{
        event.preventDefault();
        const input = event.target['battle-input'].value;
        if(input === '1'){ // 공격
            const {hero, monster} = this;
            hero.attack(monster);
            monster.attack(hero);
            if(hero.hp <= 0){ // 주인공 사망
                this.showMessage(`${hero.lev} 레벨에서 전사, 새 주인공을 생성하세요.`);
                this.quit(); // game over
            }
            else if(monster.hp < 0){ // 몬스터 사망
                this.showMessage(`몬스터를 잡아 ${monster.xp} 경험치를 얻었다.`);
                hero.getXp(monster.xp);
                this.monster = null;
                this.changeScreen('game');
            }
            else{
                this.showMessage(`${hero.att}의 데미지를 주고, ${monster.att}의 데미지를 받았다.`);
            }
            this.updateHeroStat();
            this.updateMonsterStat();

        }
        else if(input === '2'){ // 회복
    
        }
        else if(input === '3'){ // 도망
    
        }
    }
    quit(){ // 모든 정보 초기화
        this.hero = null;
        this.monster = null;
        this.updateHeroStat();
        this.updateMonsterStat();
        $gameMenu.removeEventListener('submit', this.onGameMenuInput);
        $battleMenu.removeEventListener('submit', this.onBattleMenuInput);
        this.changeScreen('start');
        game = null;
    }
    updateHeroStat(){
        const {hero} = this;
        if(hero === null){
            $heroName.textContent = '';
            $heroLevel.textContent = '';
            $heroHp.textContent = '';
            $heroXp.textContent = '';
            $heroAtt.textContent = '';
            return;
        }
        $heroName.textContent = hero.name;
        $heroLevel.textContent = `${hero.lev}Lev`;
        $heroHp.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
        $heroXp.textContent = `XP: ${hero.xp}/${15*hero.lev}`;
        $heroAtt.textContent = `ATT: ${hero.att}`;
    }
    updateMonsterStat(){
        const {monster} = this;
        if(monster === null){
            $monsterName.textContent = '';
            $monsterHp.textContent = '';
            $monsterAtt.textContent = '';
            return;
        }
        $monsterName.textContent = monster.name;
        $monsterHp.textContent = `HP: ${monster.hp}/${monster.maxHp}`;;
        $monsterAtt.textContent = `ATT: ${monster.att}`;
    }
    showMessage(text){
        $message.textContent = text;
    }
}

class Unit{
    constructor(game, name, hp, maxHp, att, xp){
        this.game = game;
        this.name = name;
        this.hp = hp;
        this.maxHp = hp;
        this.att = att;
        this.xp = xp;
    }
    attack(target){
        target.hp -= this.att;
    }
}

class Hero extends Unit{
    constructor(game, name){
        super(game, name, 100, 100, 10, 0); // 부모 클래스의 생성자 호출
        this.lev = 1;
    }
    attack(target){
        super.attack(target); // 부모 클래스의 attck 매소드 호출
    }
    heal(monster){
        this.hp += 20;
        this.hp -= monster.att;
    }
    getXp(xp){
        this.xp += xp;
        if(this.xp >= this.lev * 15){ // 경험치를 다 채우면,
            this.xp -= this.lev * 15;
            this.lev += 1;
            this.maxHp += 5;
            this.att += 5;
            this.hp = this.maxHp;
            this.game.showMessage(`레벨업! 레벨 ${this.lev}`);
        }
    }
}

class Monster extends Unit{
    constructor(game, name, hp, maxHp, att, xp){
        super(game, name, hp, maxHp, att, xp);
    }
}

let game = null;
$startScreen.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target['name-input'].value;
    game = new Game(name);
});