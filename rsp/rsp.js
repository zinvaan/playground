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
let clickable = true;
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
  //가위바위보 승패, 무승부
  if(myChoice === 'rock'){
    if(computerChoice === 'rock'){
      console.log('무승부');
    }
    else if(computerChoice === 'scissors'){
      console.log('승리')
    }
    else if(computerChoice === 'paper'){
      console.log('패배');
    }
  }
  else if(myChoice === 'scissors'){
    if(computerChoice === 'rock'){
      console.log('패배');
    }
    else if(computerChoice === 'scissors'){
      console.log('무승부')
    }
    else if(computerChoice === 'paper'){
      console.log('승리');
    }
  }
  else if(myChoice === 'paper'){
    if(computerChoice === 'rock'){
      console.log('승리');
    }
    else if(computerChoice === 'scissors'){
      console.log('패배')
    }
    else if(computerChoice === 'paper'){
      console.log('무승부');
    }
  }
  // 점수 계산 및 화면 표시
  setTimeout(() => {
    clickable =true;
    intervalID = setInterval(changeComputerHand, 50);
  }, 1000);
  }
}
$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);