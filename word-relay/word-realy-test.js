const number = Number(prompt('몇 명이 참가하나요?'));
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
let word; // 제시어
let newWord; // 제시어 저장(현재단어)


const onClickButton = () => {
    if(newWord.length === 3 && (!word || word[word.length - 1] === newWord[0])){
        // 세 글자이면서 제시어가 비었거나 입력한 단어가 올바른가, 
        word = newWord; // 입력한 단어를 제시어로 한다.
        $word.textContent = word; // 화면에 현재 단어 표시
        const order = Number($order.textContent);
        if(order+1>number){
            $order.textContent=1;
        }
        else{
            $order.textContent=order+1;
        }
    }
    else{ // 입력한 단어가 올바르지 않다면
            alert('올바르지 않은 단어입니다.');
            
        }
    $input.value='';
    $input.focus();
    };

const onInput = (event) => {
    newWord = event.target.value; // 입력하는 단어를 현재단어로 설정.
};


$button.addEventListener('click',onClickButton);
$input.addEventListener('input',onInput);