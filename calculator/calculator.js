let numOne=''; // 숫자1 저장
let numTwo=''; // 숫자2 저장
let operator=''; // 연산자 저장
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

const onClickNumber=(event)=>{ 
  // *if문 중첩 제거*
  if(!operator){ // 연산자가 없으면,
    numOne += event.target.textContent;
    $result.value += event.target.textContent; // 변수에 저장한 값을 화면에 표시
    return; // 함수 종료
  }
  // -----연산자가 있을 경우에 아래 실행-----
  if(!numTwo){ // 숫자2가 없으면,
    $result.value=''; // 화면을 비운다
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent; 
} 

const onClickOperator=(op)=>(event)=>{
  if(numOne){
    operator = op;
    $operator.value = op;
  }
  else{
    alert('숫자를 먼저 입력하세요.');
  }
}
document.querySelector('#num-0').addEventListener('click',onClickNumber);
document.querySelector('#num-1').addEventListener('click',onClickNumber);
document.querySelector('#num-2').addEventListener('click',onClickNumber);
document.querySelector('#num-3').addEventListener('click',onClickNumber);
document.querySelector('#num-4').addEventListener('click',onClickNumber);
document.querySelector('#num-5').addEventListener('click',onClickNumber);
document.querySelector('#num-6').addEventListener('click',onClickNumber);
document.querySelector('#num-7').addEventListener('click',onClickNumber);
document.querySelector('#num-8').addEventListener('click',onClickNumber);
document.querySelector('#num-9').addEventListener('click',onClickNumber);
document.querySelector('#plus').addEventListener('click',onClickOperator('+'));
document.querySelector('#minus').addEventListener('click',onClickOperator('-'));
document.querySelector('#divide').addEventListener('click',onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click',onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click',()=>{
  if(numTwo){
    switch (operator){
      case '+': // +는 문자열을 숫자열로 자동으로 변환이 안된다! 
        $result.value = parseInt(numOne)+parseInt(numTwo);
        //각각을 더할 때는 parseInt함수를 사용해서 숫자로 바꾼후 연산한다
        break;
      case '-':
        $result.value = numOne - numTwo;
        break;
      case '*':
        $result.value = numOne * numTwo;
        break;
      case '/':
        $result.value = numOne / numTwo;
        break;
      default:
        break;
    }
  }
  else{
    alert('숫자를 먼저 입력하세요.');
  }
});
document.querySelector('#clear').addEventListener('click',()=>{
  //모든 값 초기화
  numOne='';
  numTwo='';
  operator='';
  $result.value='';
  $operator.value='';
});