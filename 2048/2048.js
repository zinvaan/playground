const $table = document.getElementById('table');
const $score = document.getElementById('score');
let data = [];

function startGame(){ // 4*4 표 그리기
    const $fragment = document.createDocumentFragment();
    [1,2,3,4].forEach(function(){
        const rowData = [];
        data.push(rowData);
        const $tr = document.createElement('tr');
        [1,2,3,4].forEach(() => {
            rowData.push(0);
            const $td = document.createElement('td');
            $tr.appendChild($td);
        });
        $fragment.appendChild($tr);
    });
    $table.appendChild($fragment);
    put2ToRandomCell();
    draw();
}

function put2ToRandomCell(){ // 무작위로 숫자 2 넣기
    const emptyCells = [];
    data.forEach(function (rowData, i){
        rowData.forEach(function(cellData, j){
            if(!cellData){
                emptyCells.push([i,j]);
            }
        });
    });
    const randomCell = emptyCells[Math.floor(Math.random()*emptyCells.length)];
    data[randomCell[0]][randomCell[1]] = 2;
}

function draw(){ // 16칸 그리고, 텍스트와 클래스 부여
    data.forEach((rowData, i) => {
        rowData.forEach((cellData, j) =>{
            const $target = $table.children[i].children[j];
            if(cellData > 0){
                $target.textContent = cellData;
                $target.className = 'color-' + cellData;
            }
            else{
                $target.textContent = '';
                $target.className = '';
            }
        });
    });
}

startGame();