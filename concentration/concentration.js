const $wrapper = document.querySelector('#wrapper');

const total = 12;
const colors = ['red', 'orange', 'yellow', 'green', 'white', 'pink'];
let colorCopy = colors.concat(colors);
let shuffled = [];
let clicked = []; // 뒤집은 카드 저장
let completed = []; // 같은 카드 저장
let clickable = false;

function shuffle(){ // 피셔-예이츠 셔플
    for(let i = 0; colorCopy.length > 0; i+=1){
        const randomIndex = Math.floor(Math.random() * colorCopy.length);
        shuffled = shuffled.concat(colorCopy.splice(randomIndex, 1));
    }
}

function createCard(i){ // div.card >(자식) div.card-inner > (div.card-front +(형제) div.card-back)
    const card = document.createElement('div');
    card.className = 'card' // .card 태그 생성
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner'; // .card-inner 태그 생성
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front'; // .card-Front 태그 생성
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back'; // .card-back 태그 생성

    cardBack.style.backgroundColor = shuffled[i];
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    return card;
}
function onClickCard(){
    if(!clickable || completed.includes(this) || clicked[0] === this){
        return;
    }
    this.classList.toggle('flipped');
    clicked.push(this);
    if(clicked.length !== 2){
        return;
    }
    // 클릭한 카드의 개수가 두 개 일 때
    const firstBackColor = clicked[0].querySelector('.card-back').style.backgroundColor;
    const seconedBackColor = clicked[1].querySelector('.card-back').style.backgroundColor;
    clickable = false;
    // 두 카드가 다르면,
    setTimeout(() => {
        clicked[0].classList.remove('flipped');
        clicked[1].classList.remove('flipped');
        clicked = []; // 뒤집은 카드 배열 비우기
        clickable = true;
    }, 900);
}

function startGame(){
    clickable = false;
    shuffle();
    for(let i = 0; i < total; i += 1){
        const card = createCard(i);
        card.addEventListener('click', onClickCard);
        $wrapper.appendChild(card);
    }
    document.querySelectorAll('.card').forEach((card,index) => { // 초반 카드 공개
        setTimeout(() => {
            card.classList.add('flipped')
        }, 1000 + 100 * index);
    });

    setTimeout(() => { // 카드 감추기
        document.querySelectorAll('.card').forEach((card) =>{
            card.classList.remove('flipped');
        });
        clickable = true;
    }, 5000);
}

function resetGame(){
    $wrapper.innerHTML = '';
    colorCopy = colors.concat(colors);
    shuffled = [];
    completed = [];
    startGame();
}

startGame();