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
const hero = { // 영웅 초기 스탯
    name: '',
    lev: 1,
    maxHp: 100,
    hp: 100,
    xp: 0,
    att: 10,
};

let monster = null;
const monsterList =[
    {name: '슬라임', hp: 25, att: 10, xp: 10},
    {name: '스켈레톤', hp: 50, att: 15, xp: 20},
    {name: '마왕', hp: 150, att: 35, xp: 50},
];

$startScreen.addEventListener('submit',(event)=>{
    event.preventDefault();
    const name = event.target['name-input'].value;
    $startScreen.style.display = 'none';
    $gameMenu.style.display = 'block';
    $heroName.textContent = name;
    $heroLevel.textContent = `Lev: ${hero.lev}`;
    $heroHp.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
    $heroXp.textContent = `XP: ${hero.xp}/${15*hero.lev}`;
    $heroAtt.textContent = `ATT: ${hero.att}`;
    hero.name = name;
});
$gameMenu.addEventListener('submit', (event)=>{
    event.preventDefault();
    const input = event.target['menu-input'].value;
    if(input === '1'){ // 모험
        $gameMenu.style.display = 'none';
        $battleMenu.style.display = 'block';
        monster = JSON.parse(
            JSON.stringify(monsterList[Math.floor(Math.random()*monsterList.length)])
        );
        monster.maxHp = monster.hp;
        $monsterName.textContent = monster.name;
        $monsterHp.textContent = `HP: ${monster.hp}/${monster.maxHp}`;
        $monsterAtt.textContent = `ATT: ${monster.att}`;
    }
    else if(input === '2'){ // 휴식

    }
    else if(input === '3'){ // 종료

    }
})
$battleMenu.addEventListener('submit', (event)=>{
    const input = event.target['battle-input'].value;
    if(input === '1'){ // 공격

    }
    else if(input === '2'){ // 회복

    }
    else if(input === '3'){ // 도망

    }
})