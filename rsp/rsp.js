const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');

const IMG_URL = './rsp.png'; // 가위바위보 이미지
$computer.style.background = `url(${IMG_URL}) 0 0`; // 가위
$computer.style.background = `url(${IMG_URL}) -220px 0`; // 바위
$computer.style.background = `url(${IMG_URL}) -440px 0`; // 보
$computer.style.backgroundSize = 'auto 200px'; // backgroundSize CSS 속성은 background 속성과 항상 같이 나와야함.

const scissorsX = '-0'; // 가위
const rockX = '-220px'; // 바위
const paperX = '-440px'; // 보