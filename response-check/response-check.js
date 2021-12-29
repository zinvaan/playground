const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');

let startTime;
let endTime;
let timeoutId;
const records = []; // 반응속도 기록

$screen.addEventListener('click', function(){
    if($screen.classList.contains('waiting')){//대기화면
        $screen.classList.remove('waiting');
        $screen.classList.add('ready');
        $screen.textContent = '초록색이 되면 클릭하세요';

        timeoutId = setTimeout(function(){
            startTime = new Date();
            $screen.classList.remove('ready');
            $screen.classList.add('now');
            $screen.textContent = '클릭하세요!';
        }, Math.floor(Math.random()*1000)+2000); // 2000~3000초 사이 수
    }
    else if($screen.classList.contains('ready')){//준비화면
        clearTimeout(timeoutId);
        $screen.classList.remove('ready');
        $screen.classList.add('waiting');
        $screen.textContent = '너무 성급하시군요!';
    }
    else if($screen.classList.contains('now')){//클릭화면
        endTime = new Date();
        const current = endTime - startTime;
        records.push(current);

        const average = records.reduce((a,c)=>a+c) / records.length; // 모든 값의 합을 구할 때 reduce 매서드 사용
        $result.textContent = `현재 ${current}ms, 평균 ${average}ms`;
        startTime = null;// 반복 측정해야 하므로 측정 끝날 때 마다 null로 비움
        endTime = null; // 반복 측정해야 하므로 측정 끝날 때 마다 null로 비움

        $screen.classList.remove('now');
        $screen.classList.add('waiting');
        $screen.textContent = '클릭해서 시작하세요.';
    }
})