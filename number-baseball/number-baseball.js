const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = []; // 무작위로 뽑은 숫자 저장
for(let n=0;n<=9;n+=1){
    numbers.push(n); // 뽑은 숫자를 추가(push)
}

const answer = []; 
for(let n=0;n<=3;n+=1){ // 무작위로 숫자 네 개 뽑기
    const index = Math.floor(Math.random()*numbers.length); // 0~8 정수,numbers 길이에 따라 
    answer.push(numbers[index]);
    numbers.splice(index,1); // 뽑은 숫자는 배열에서 제거(splice)
}
console.log(answer);