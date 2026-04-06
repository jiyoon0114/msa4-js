/* 나 fs 필요해 -> file system 선언
const fs = require('fs');

let N = Number(fs.readFileSync(0).toString().trim());
fs.readFileSync(0) -> readFileSysnc-> 동기적으로 파일 읽기, 0-> 표준입력(stdin), 0은 키보드 입력으로 보면됨
.toString() 읽은 데이터는 바이트 덩어리이기 때문에 문자열로 변환시켜야함
.trim -> 앞뒤 공백 제거 */
/*
만약 입력이 
3
1 2 3
이렇게 들어온다면 
fs.readFileSync(0)의 결과는 버퍼형태로 나옴 -> toString()사용
"3\n1 2 3\n" 이렇게 저장이 됨 -> .trim()을 하면
3\n1 2 3 끝에 있는 \n 제거됨 
const input = "3\n1 2 3" -> 이런 문자열 형태로 나옴()
.split('\n')하면 -> ['4','1 2 3] -> 이런 배열 형태가 됨
array.map()을 하면 배열 각 요소에 함수를 적용시킴
만약 number을 하면?
cosnt arr =['1','2','3']; 
const result = arr.map(Number);
console.log(result); -> [1,2,3] -> 배열 각 요소가 숫자로 변함
*/ 

// const fs = require('fs');
// let input = fs.readFileSync(0).toString().trim();
// console.log(`안녕 ${input}`);


import readline from 'readline';

const rl = readline.createInterface({
  //입력을 stdin으로 받겠다
  input: process.stdin,
  // output은 터미널로 받겠다.
  output: process.stdout
});
console.log('등수를 입력해 주세요.');

// 아래 콜백 함수에 입력값으로 실행할 처리 작성
rl.on('line', (line) => {
  line = line.trim();
  let rank = parseInt(line);

  if(rank === 1) {
    // 조건식이 true일때, 실행하고 싶은 코드를 작성
    console.log('우승');
  } else if(rank === 2) {
    console.log('준우승');
  } else if(rank === 3) {
    console.log('3등');
  } else {
    // 위에서 체크한 조건에 모두 false일 경우, 나머지 모든 조건은 else가 실행
    if(rank !== 5 && rank !== 7) {
      console.log('순위 외');
    } else {
      console.log('특별상');
    }
  }

  rl.close(); // 입력 종료
});

// 종료 시 실행
rl.on('close', () => {
  process.exit();
});
