const $startScreen = document.querySelector('#start-screen');
const $gameMenu = document.querySelector('#game-menu');
const $battelMenu = document.querySelector('#battle-menu');
const $heroName = document.querySelector('#hero-name');

$startScreen.addEventListener('submit',(event)=>{
    event.preventDefault();
    const name = event.target['name-input'].value;
    $startScreen.style.display = 'none';
    $gameMenu.style.display = 'block';
    $heroName.textContent = name;
})