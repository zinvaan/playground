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

const tries = [];
function checkInput(input){ // $input.value 값을 판단하는 함수
    if(input.length !== 4){ // 입력한 숫자가 4자리 숫자인지 판단
        return alert('4자리 숫자를 입력해주세요');
    }
    if(new Set(input).size !==4){ // 중복된 숫자가 있는지 판단
        // Set은 중복을 허용하지 않는 특수한 배열
        return alert('중복되지 않게 입력해 주세요.');
    }
    if(tries.includes(input)){ // 이미 시도했던 값인지 판단
        return alert('이미 시도한 값입니다.');
    }
    return true; 
    // *모든 조건이 참일 때 ture 반환(아니면 false)
    // *alert는 undefiend을 반환하므로 false값을 반환한다
};

$form.addEventListener('submit', (event)=>{
    event.preventDefault(); // submit 이벤트 발생 시 초기화 방지
    const value = $input.value; // 입력한 값 가져오기*문자열
    $input.value='';
    const valid = checkInput(value);
    if(!valid){
        return;
    }
    if(answer.join('')===value){ // answer 배열에서 콤마 없앰
        // *answer = [1,2,3,4]라면 answer.join('')을 하면 '1234'라는 문자열이 된다.
        $logs.textContent='홈런!';
        return;
    }
    if(tries.length>=9){
        const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
        $logs.appendChild(message);
        return;
    // *append 기존의 $logs 태그의 내용을 유지하면서 추가로 다음 줄에 기록을 남기려면
    // *document.createTextNode로 먼저 텍스트를 만들고 appendChild로 화면에 추가해야한다.
    // *textContent를 사용하면 기존 내용이 사라져버린다.
    }

    // 몇 스트라이크 몇 볼 검사
    let strike = 0;
    let ball = 0;
    for(let i=0; i < answer.length;i++){
        const index = value.indexOf(answer[i]); // 일치하는 숫자 찾기
        // *indexOf는 일치하는 값을 찾으면 해당 배열의 index 넘버를 반환한다.
        // *indexOf의 일치하는 값이 없는 경우 -1을 반환한다.

        if(index > -1){ // 일치하는 숫자를 찾았으면,
            if(index === i){ // 자릿수도 같으면,
                strike += 1;
            }
            else{ // 숫자만 같은 경우
                ball += 1;
            }
        }
    }
    $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`,
    document.createElement('br')); 
    tries.push(value); // tries 배열에 방금 입력한 값을 저장해 시도횟수 +1 시켜준다.

    // *append 매서드는 텍스트와 태그를 동시에 추가할 수 있다.
    // *appendChilde 매서드는 하나의 텍스트나 태그만 추가할 수 있다.
})