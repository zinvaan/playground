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
// 버튼을 클릭하면 setInterval이 멈췄다가 1초 뒤에 다시 실행
let intervalID = setInterval(changeComputerHand, 50);
// 점수표(나-컴퓨터)
// 가위: 1, 바위: 0, 보: -1
// 나/컴퓨터 가위 바위 보
// 가위       0    1   2
// 바위      -1    0   1
// 보        -2   -1   0
const scoreTable = {
  rock: 0,
  scissors: 1,
  paper: -1,
}

let clickable = true;
let score = 0;
const clickButton = () => {
  if(clickable){ // 버튼을 클릭하는 동안 false
    clearInterval(intervalID);
    clickable = false;

    // 어떤 선택지를 클릭했는지 알아내기
    const myChoice = event.target.textContent === '바위' // event.target.textContent를 사용하면 글자를 알아 낼 수 있다
    ? 'rock'
    : event.target.textContent === '가위'
    ? 'scissors'
    : 'paper';
  //가위바위보 승패, 무승부(점수표 활용)
  const myScore = scoreTable[myChoice];
  const computerScore = scoreTable[computerChoice];
  const diff = myScore - computerScore;
  let message;
  if([2,-1].includes(diff)){
    score += 1;
    message = '승리';
  }
  else if([-2,1].includes(diff)){
    score -= 1;
    message = '패배';
  }
  else{
    message = '무승부';
  }
  // 점수 계산 및 화면 표시
  $score.textContent = `${message} 총: ${score}점`;
  setTimeout(() => {
    clickable =true;
    intervalID = setInterval(changeComputerHand, 50);
  }, 1000);
  }
}
$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);