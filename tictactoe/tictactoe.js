const {body} = document;
// const body = document.body;와 같은 의미
// 구조분해할당 destructuring assignment 라고 한다.
// 객체 안의 속성이름과 변수이름이 같을 때 줄여서 사용 가능
// 배열에서 특정 인덱스를 가져올 때,
// const arr = [1,2,3,4,5]
// const one = arr[0];
// const two = arr[1];
// ...
// // const five = arr[4];
// const [one,two,three,four,five] = arr 로 줄여 쓸 수 있다.

const $table = document.createElement('table');
const $result = document.createElement('div'); // 결과창
const rows =[];
let turn = 'O';

// rows= []는,
//[
//  [td, td, td],
//  [td, td, td],
//  [td, td, td],
//]
// target은 td들 중 하나
const checkWinner = (target) => {
    let rowIndex;
    let cellIndex;
    rows.forEach((row,ri)=>{ // 이중 반복문으로 몇 번 째 줄 몇 번째 칸인지 판단
        row.forEach((cell,ci)=>{
            if(cell === target){
                rowIndex = ri;
                cellIndex = ci;
            };
        })
    })
// 세 칸 다 채워졌다면,
let hasWinner = false;
// 가로줄 검사
if(
    rows[rowIndex][0].textContent === turn &&
    rows[rowIndex][1].textContent === turn &&
    rows[rowIndex][2].textContent === turn
){
    hasWinner = true;
}
// 세로줄 검사
if(
    rows[0][cellIndex].textContent === turn &&
    rows[1][cellIndex].textContent === turn &&
    rows[2][cellIndex].textContent === turn
){
    hasWinner = true;
}
// 대각선 검사
if(
    rows[0][0].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][2].textContent === turn
){
    hasWinner = true;
}
if(
    rows[0][2].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][0].textContent === turn
){
    hasWinner = true;
 }
 return hasWinner;
};

const callback = (event) =>{
    if(event.target.textContent !==''){ // 칸이 이미 채워져 있으면,
        console.log('빈칸이 아닙니다.');
        return;
    }
     // 빈칸이면,
    console.log('빈칸입니다.');
    event.target.textContent = turn;
    const hasWinner = checkWinner(event.target);
    // 승부 판단하기
    if(hasWinner){
        $result.textContent = `${turn}님이 승리!`;
        $table.removeEventListener('click', callback);
        return;
    }
    // 무승부일경우
    let count = 0;
    rows.forEach((row) => {
        row.forEach((cell) =>{
            if(cell.textContent){ // 칸에 O나 X가 있는지 판단
                count += 1; // 있으면 count +1
            }
        })
    });
    if (count === 9){ // 9칸 다 차있다면 합계가 9가 되므로,
        $result.textContent = `무승부`;
        return;
    }
   
    turn = turn === 'X' ? 'O' : 'X'; // callback 함수 마지막에서 turn이 O이면 X, X면 O로 바꾼다.
    // 우선순위 ===, 삼항연산자, = 순
    // turn = (turn === 'X') ? 'O' : 'X' 소괄호를 활용하면 명확해진다.
    // 조건부연산자 대신 if문 사용가능
    // if(turn === 'X'){
    // turn = 'O';
    // } else{
    // turn = 'X';
    // }
};

for(let i=1;i<=3;i++){
    const $tr = document.createElement('tr'); // tr:표의 가로줄
    const cells =[];
    for(let j=1;j<=3;j++){
        const $td = document.createElement('td'); // td:표의 세로줄
        // $td.addEventListener('click', callback);
        cells.push($td);
        $tr.appendChild($td);
    }
    rows.push(cells);
    $table.appendChild($tr);
    $table.addEventListener('click', callback); // Event bubbling : 이벤트는 table에 달았는데 클릭을 하면 td에도 영향을 미친다.
}
body.appendChild($table);
body.appendChild($result);