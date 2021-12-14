let numOne=''; // 숫자1 저장
let numTwo=''; // 숫자2 저장
let operator=''; // 연산자 저장
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

const onClickNumber=(event)=>{
  if(operator){
    numTwo += event.target.textContent;
  }
  else{
    numOne += event.target.textContent;
  }
  $result.value += event.target.textContent; // 변수에 저장한 값을 화면에 표시
}
const onClickOperator=(operator)=>(event)=>{
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
document.querySelector('#calculate').addEventListener('click',()=>{});
document.querySelector('#clear').addEventListener('click',()=>{});