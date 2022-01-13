const $wrapper = document.querySelector('#wrapper');

const total = 12;
const colors = ['red', 'yellow', 'green', 'white', 'pink'];
let colorCopy = colors.concat(colors);
let shuffled = [];

function shuffle(){
    for(let i = 0; colorCopy.length > 0; i += 1){
        const randomIndex = Math.floor(Math.random() * colorCopy.length);
        shuffled = shuffled.concat(colorCopy.splice(randomIndex, 1));
    }
};

function createCard(i){ // div.card >(자식) div.card-inner > (div.card-front +(형제) div.card-back)
    const card = document.createElement('div');
    card.className = 'card'; // .card 태그 생성
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner'; // .card-inner 태그 생성
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front'; // .card-front 태그 생성
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back'; // .card-back 태그 생성
    cardBack.style.backgroundColor = shuffled[i];
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    return card;
};

function startGame(){
    shuffle();
    for(let i = 0; i < total; i += 1){
        const card = createCard(i);
        $wrapper.appendChild(card);
    }
};

startGame();