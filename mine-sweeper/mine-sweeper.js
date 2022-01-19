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
function onRightClick(event){
    event.preventDefault();
    const target = event.target;
    const rowIndex = target.parentNode.rowIndex;
    const cellIndex = target.cellIndex;
    const cellData = data[rowIndex][cellIndex];
    if(cellData === CODE.MINE){ // 지뢰면,
        data[rowIndex][cellIndex] = CODE.QUESTION_MINE; // 물음표 지뢰로
        target.className = 'question';
        target.textContent = '?';
    }
    else if(cellData === CODE.QUESTION_MINE){ // 물음표 지뢰면,
        data[rowIndex][cellIndex] = CODE.FLAG_MIND; // 깃발 지뢰로
        target.className = 'flag';
        target.textContent = '!';
    }
    else if(cellData === CODE.FLAG_MIND){ // 깃발 지뢰면,
        data[rowIndex][cellIndex] = CODE.MINE; // 지뢰로
        target.className = '';
        target.textContent = 'X';
    }
    else if(cellData === CODE.NORMAL){ // 닫힌 칸이면,
        data[rowIndex][cellIndex] = CODE.QUESTION; // 물음표로
        target.className = 'question';
        target.textContent = '?';
    }
    else if(cellData === CODE.QUESTION){ // 물음표면,
        data[rowIndex][cellIndex] = CODE.FLAG; // 깃발로
        target.className = 'flag';
        target.textContent = '!';
    }
    else if(cellData === CODE.FLAG){ // 깃발이면
        data[rowIndex][cellIndex] = CODE.NORMAL; // 닫힌 칸으로
        target.className = '';
        target.textContent = '';
    }
}
function countMine(rowIndex, cellIndex){
    const mines = [CODE.MINE, CODE.QUESTION_MINE, CODE.FLAG_MIND]; // -6,-4,-5
    let i = 0;
    mines.includes(data[rowIndex-1]?.[cellIndex-1]) && i++;
    mines.includes(data[rowIndex-1]?.[cellIndex]) && i++;
    mines.includes(data[rowIndex-1]?.[cellIndex+1]) && i++;
    mines.includes(data[rowIndex][cellIndex-1]) && i++;
    mines.includes(data[rowIndex][cellIndex+1]) && i++;
    mines.includes(data[rowIndex+1]?.[cellIndex-1]) && i++;
    mines.includes(data[rowIndex+1]?.[cellIndex]) && i++;
    mines.includes(data[rowIndex+1]?.[cellIndex+1]) && i++;
    return i;
}
function open(rowIndex, cellIndex){
    const target = $tbody.children[rowIndex]?.children[cellIndex];
    if(!target){
        return;
    }
    const count = countMine(rowIndex, cellIndex);
    target.textContent = count || '';
    target.className = 'opened';
    data[rowIndex][cellIndex] = count;
    return count;
}
function openAround(rI, cI){
    const count = open(rI, cI);
    if(count === 0){
        open(rI-1, cI-1);
        open(rI-1, cI);
        open(rI-1, cI+1);
        open(rI, cI-1);
        open(rI, cI+1);
        open(rI+1, cI-1);
        open(rI+1, cI);
        open(rI+1, cI+1);
    }
}
function onLeftClick(event){
    const target = event.target; // td 태그
    const rowIndex = target.parentNode.rowIndex;
    const cellIndex = target.cellIndex;
    const cellData = data[rowIndex][cellIndex];
    if(cellData === CODE.NORMAL){ // 닫힌 칸이면,
        openAround(rowIndex, cellIndex);
    }
    else if(cellData === CODE.MINE){ // 지뢰 칸이면,
        target.textContent = '펑';
        target.className = 'opened';
        // 지뢰 클릭 이후 더 이상 클릭 안되도록 removeEventListener 해준다.
        $tbody.removeEventListener('contextmenu', onRightClick);
        $tbody.removeEventListener('click', onLeftClick);
    } // 나머지는 무시
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
        $tbody.addEventListener('contextmenu', onRightClick);
        $tbody.addEventListener('click', onLeftClick);
    })
}
drawTable();