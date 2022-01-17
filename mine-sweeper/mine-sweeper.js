const $tbody = document.querySelector('#table tbody');
const $result = document.querySelector('#result');
const row = 10; // 줄
const cell = 10; // 칸
const mine = 10; // 지뢰
const CODE = {
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MIND: -5,
    MINE: -6,
    OPEND: 0, // 0 이상이면 모두 열린 칸
}
let data;

function plantMine(){
    const candidate = Array(row * cell).fill().map((arr, i) => {
        return i;
    });
    const shuffle = [];
    while(candidate.length > row * cell - mine){
        const chosen = candidate.splice(Math.floor(Math.random()*candidate.length), 1)[0];
        shuffle.push(chosen);
    }
    const data = [];
    for(let i = 0; i < row; i++){
        const rowData = [];
        data.push(rowData);
        for(let j=0; j < cell; j++){
            rowData.push(CODE.NORMAL);
        }
    }
    for(let k = 0; k < shuffle.length; k++){
        const ver = Math.floor(shuffle[k] / cell);
        const hor = shuffle[k] % cell;
        data[ver][hor] = CODE.MINE;
    }
    return data;
}

function drawTable(){
    data = plantMine();
    data.forEach((row) => {
        const $tr = document.createElement('tr');
        row.forEach((cell) => {
            const $td = document.createElement('td');
            if(cell === CODE.MINE){
                $td.textContent = 'X';
            }
            $tr.append($td);
        });
        $tbody.append($tr);
    })
}
drawTable();