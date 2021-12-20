const candidate = Array(45).fill().map((v,i) => i+1); // 45개 숫자 만들기
const shuffle = [];

// * Fisher-Yates Shuffle*
while(candidate.length > 0){
  const random = Math.floor(Math.random() * candidate.length); // 무작위 index 뽑기
  const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어 있음
  const value = spliceArray[0]; // 배열에 들어 있는 값을 꺼낸다
  
  shuffle.push(value); // shuffle 배열에 넣기
}
console.log(shuffle);