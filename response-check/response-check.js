const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');

let startTime;
let endTime;

$screen.addEventListener('click', function(){
    if($screen.classList.contains('waiting')){//대기화면
        $screen.classList.remove('waiting');
        $screen.classList.add('ready');
        $screen.textContent = '초록색이 되면 클릭하세요';
        setTimeout(function(){
            startTime = new Date();
            $screen.classList.remove('ready');
            $screen.classList.add('now');
            $screen.textContent = '클릭하세요!';
        }, Math.floor(Math.random()*1000)+2000); // 2000~3000초 사이 수
    }
    else if($screen.classList.contains('ready')){//준비화면

    }
    else if($screen.classList.contains('now')){//클릭화면
        endTime = new Date();
        $result.textContent = `${endTime - startTime}ms`;
        $screen.classList.remove('now');
        $screen.classList.add('waiting');
        $screen.textContent = '클릭해서 시작하세요.';
    }
})