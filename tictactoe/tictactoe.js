const {body} = document;
const $table = document.createElement('table');
const $result = document.createElement('div'); // 결과창
const rows =[];
let turn = 'O';
const checkWinner = (target) => {
    let rowIndex;
    let cellIndex;
    rows.forEach((row,ri)=>{
        row.forEach((cell,ci)=>{
            if(cell === target){
                rowIndex = ri;
                cellIndex = ci;
            }
        });
    });
// 세 칸 다 채워졌다면,
let hasWinner = false;
// 가로줄 검사
if(
    rows[rowIndex[0]].textContent === turn &&
    rows[rowIndex[1]].textContent === turn &&
    rows[rowIndex[2]].textContent === turn
){
    hasWinner = true;
}
// 세로줄 검사
if(
    rows[cellIndex[0]].textContent === turn &&
    rows[cellIndex[1]].textContent === turn &&
    rows[cellIndex[2]].textContent === turn
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
 };
 return hasWinner;
}

const callback = (event) =>{
    if(event.target.textContent !==''){ // 칸이 이미 채워져 있으면,
        console.log('빈칸이 아닙니다.');
    }
    else{ // 빈칸이면,
        console.log('빈칸입니다.');
        event.target.textContent = turn;
        turn = turn == 'X' ? 'O' : 'X'; // callback 함수 마지막에서 turn이 O이면 X, X면 O로 바꾼다.
        //조건부연산자 대신 if문 사용가능
        // if(turn === 'X'){
        // turn = 'O';
        // } else{
        // turn = 'X';
        // }
    }
}
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
    $table.addEventListener('click', callback); // $td 이벤트리스너 제거, $table 이벤트리스너 추가
}
body.appendChild($table);
body.appendChild($result);