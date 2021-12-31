const {body} = document;
const $table = document.createElement('table');
const $result = document.createElement('div'); // 결과창
const rows =[];
let turn = 'O';

const callback = (event) =>{
    if(event.target.textContent !==''){ // 칸이 이미 채워져 있으면,
        console.log('빈칸이 아닙니다.');
    }
    else{ // 빈칸이면,
        console.log('빈칸입니다.');
        event.target.textContent = turn;
    }
}
for(let i=1;i<=3;i++){
    const $tr = document.createElement('tr'); // tr:표의 가로줄
    const cells =[];
    for(let j=1;j<=3;j++){
        const $td = document.createElement('td'); // td:표의 세로줄
        $td.addEventListener('click', callback);
        cells.push($td);
        $tr.appendChild($td);
    }
    rows.push(cells);
    $table.appendChild($tr);
}
body.appendChild($table);
body.appendChild($result);