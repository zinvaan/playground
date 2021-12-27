const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');

$screen.addEventListener('click', function(){
    if($screen.classList.contains('waiting')){
        //대기화면
        $screen.classList.remove('waiting');
        $screen.classList.add('ready');
        $screen.textContent = '초록색이 되면 클릭하세요';
        
    }
    else if($screen.classList.contains('ready')){
        //준비화면
    }
    else if($screen.classList.contains('now')){
        //클릭화면
    }
})