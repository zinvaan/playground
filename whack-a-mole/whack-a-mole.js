const $timer = document.querySelector('#timer');
const $score = document.querySelector('#score');
const $game = document.querySelector('#game');
const $start = document.querySelector('#start');
const $$cells = document.querySelectorAll('.cell');

const holes = [0,0,0,0,0,0,0,0,0];
let started = false; // flag
let score = 0;

$start.addEventListener('click', () => {
    if(started) return; // 이미 시작하였으면 무시
    started = true;
    console.log('시작');
    const tickId = setInterval(tick, 1000);
    tick();
});

let gopherPercent = 0.3;
let bombPercent = 0.5; // 0.3(두더지) + 0.2(폭탄) 누적값
function tick(){
    holes.forEach((hole, index) => {
        if(hole) return; // 무언가 일어나고 있으면 return
        const randomValue = Math.random();
        if(randomValue < gopherPercent){
            const $gopher = $$cells[index].querySelector('.gopher');
            holes[index] = setTimeout(() => { // 1초 뒤에 사라짐
            $gopher.classList.add('hidden');
            holes[index] = 0;
            }, 1000);
            $gopher.classList.remove('hidden');
        }
        else if(randomValue < bombPercent){
            const $bomb = $$cells[index].querySelector('.bomb');
        holes[index] = setTimeout(() => { // 1초 뒤에 사라짐
            $bomb.classList.add('hidden');
            holes[index] = 0;
        }, 1000);
        $bomb.classList.remove('hidden');
        }
        
    });
}

$$cells.forEach(($cell, index) => {
    $cell.querySelector('.gopher').addEventListener('click', (event) => {
        event.target.classList.add('dead');
        event.target.classList.add('hidden');
        clearTimeout(holes[index]); // 기존 내려가는 타이머 제거
        setTimeout(() => {
            holes[index] = 0;
            event.target.classList.remove('dead');
        }, 1000);
    });
    $cell.querySelector('.bomb').addEventListener('click', (event) => {
        event.target.classList.add('boom');
        event.target.classList.add('hidden');
        clearTimeout(holes[index]);
        setTimeout(() => {
            holes[index] = 0;
            event.target.classList.remove('boom');
        }, 1000);
    });
});
