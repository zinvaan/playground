const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = []; // 무작위로 뽑은 숫자 저장
for(let n=0;n<=9;n+= 1){
    numbers.push(n); // 뽑은 숫자를 추가(push)
}

const answer = []; 
for(let n=0;n<=3;n+=1){ // 무작위로 숫자 네 개 뽑기
    const index = Math.floor(Math.random()*numbers.length); // 0~8 정수,numbers 길이에 따라 
    answer.push(numbers[index]);
    numbers.splice(index,1); // 뽑은 숫자는 배열에서 제거(splice)
}
console.log(answer); // 랜덤으로 뽑은 숫자 확인

const tires = [];
function checkInput(input){ // $input.value 값을 판단하는 함수
    if(input.length !== 4){ // 입력한 숫자가 4자리 숫자인지 판단
        return alert('4자리 숫자를 입력해주세요');
    }
    if(new Set(input).size !==4){ // 중복된 숫자가 있는지 판단
        // Set은 중복을 허용하지 않는 특수한 배열
        return alert('중복되지 않게 입력해 주세요.');
    }
    if(tires.includes(input)){ // 이미 시도했던 값인지 판단
        return alert('이미 시도한 값입니다.');
    }
    return true; 
    // 모든 조건이 참일 때 ture 반환(아니면 false)
    // alert는 undefiend을 반환하므로 false값을 반환한다
};

$form.addEventListener('submit', (event)=>{
    event.preventDefault(); // submit 이벤트 발생 시 초기화 방지
    const value = $input.value; // 입력한 값 가져오기*문자열
    $input.value='';
    const valid = checkInput(value);
})