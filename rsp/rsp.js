const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');

const IMG_URL = './rsp.png'; // 가위바위보 이미지
$computer.style.background = `url(${IMG_URL}) 0 0`; // 가위
$computer.style.backgroundSize = 'auto 200px'; // backgroundSize CSS 속성은 background 속성과 항상 같이 나와야함.

//객체로 묶기
const rspX={
  scissors: '-0', // 가위
  rock: '-220px', // 바위
  paper: '-440px', // 보
}

let computerChoice = 'scissors'; // 컴퓨터가 처음에 가위를 내도록 설정
const changeComputerHand = () => {
  if(computerChoice === 'rock'){
    computerChoice = 'scissors';
  }
  else if(computerChoice === 'scissors'){
    computerChoice = 'paper';
  }
  else if(computerChoice === 'paper'){
    computerChoice = 'rock';
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = 'auto 200px';
}
setInterval(changeComputerHand, 50);