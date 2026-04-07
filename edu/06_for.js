//for 문
//기본 문법
/*
for(초기값; 조건식 = for문 언제까지 돌릴래?; 1회 루프당 증감값;) {
  //반복하고 싶은 처리
}
*/

/*
for(let i =0; i < 3; i++) {
  console.log(i + '번째 루프');
}


for(let i =0; i < 3; i++) {
  if(i === 1) {
    //break: 처리중 break를 만나면 그 즉시 루프 종료
    break;
  }
  console.log(i + '번째 루프');
}

for(let i = 0; i < 5; i++) {
  //continue: 만나는 즉시 그 다음 루프로 진행
  if(i % 2 === 0) {
    //짝수는 그냥 넘어가라
    continue;
  }
  //약간 반투명 -> 이거 영원히 실행 안된다고 알려줌
  console.log(i + '번째 루프');
}
*/

// for(let i = 0; i < 3; i++) {
//   console.log(`부모: ${i}번째`);

//   for(let z = 0; z < 3; z++) {
//     console.log(`자식: ${z}번째`);
//   }
// }


for(let i = 1; i <= 9; i++) {
  console.log(`2 X ${i} = ${2 * i}`);  
}

for(let i =2; i <= 9; i++) {
  console.log(`** ${i}단 **`)
  for(let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`)
  }
}