const candidate = Array(45).fill().map((v,i) => i+1); // 45개 숫자 만들기

// * Fisher-Yates Shuffle*
const shuffle = [];
while(candidate.length > 0){
  const random = Math.floor(Math.random() * candidate.length); // 무작위 index 뽑기
  const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어 있음
  const value = spliceArray[0]; // 배열에 들어 있는 값을 꺼낸다
  
  shuffle.push(value); // shuffle 배열에 넣기
}
console.log(shuffle);

// *Sort
const winBalls = shuffle.slice(0,6).sort((a,b) => a-b); // slice(start index, end index) start부터 end 전까지 복사본을 새로운 배열 객체로 반환
// *a-b가 0보다 크면 내림차순(descending order), b,a 순서로 정렬
// *a-b가 0보다 작으면 오름차순(ascending order), a,b 순서로 정렬
// *a-b가 0이면 그대로
const bonus = shuffle[6];
console.log(winBalls, bonus);

// *Timer (1000ms)
const $result = document.querySelector('#result');
function drawBall(number, $parent){
  const $ball = document.createElement('div');
    $ball.className = 'ball';
    $ball.textContent = winBalls[i];
    $parent.appendChild($ball);
}
for(let i=0;i<winBalls.length;i++){
  setTimeout(() => { // setTimeout(ms 이후 실행, ms(시간))
    drawBall(winBalls[i], $result);
  }, 1000*(i+1));  
}

const $bonus = document.querySelector('#bonus');
setTimeout(() => {
  drawBall(bonus, $bonus);
}, 7000);