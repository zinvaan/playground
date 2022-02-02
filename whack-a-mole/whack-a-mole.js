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
    tick();
});

function tick(){
    holes.forEach((hole, index) => {
        const $gopher = $$cells[index].querySelector('.gopher');
        holes[index] = setTimeout(() => { // 1초 뒤에 사라짐
            $gopher.classList.add('hidden');
            holes[index] = 0;
        }, 1000);
        $gopher.classList.remove('hidden');
    });
}