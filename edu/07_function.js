//함수 (function)
// 입력을 받아서 출력을 하는 입력의 과정을 정의한 것
// 특정 처리를 모듈화해서, 코드의 중복 최소화
// 호이스팅의 영향을 받는다 -> 함수 선언 전 or 후 언제 함수 사용해도 상관 없음


//함수 선언식
function fnc1(a, b) {
  let sum = a + b;
  return sum; // return: 함수의 연산 결과를 반환
}

// argument(인수) : 함수 호출에서 전달되는 값 
let result = fnc1(2,5);

console.log(result);
console.log(fnc1(2, 4));

// 함수 표현식
// 함수의 이름을 생략한 익명함수를 변수에 할당해서 사용하는 방식
// 보통 익명함수를 할당한 변수는 const로 선언을 한다
// 호이스팅의 영향을 받지 않는다 -> function 선언 전 먼저 사용하면 에러가 발생함
const fnc3 = function(a, b) {
  return a + b;
}

// 화살표 함수
const fnc4 = (a,b) => {
  return a + b;
}
//한줄이면 이렇게 쓰면 위에 있는 함수나 아래나 똑같은 결과물임
const fnc5 = (a, b) => a + b;
// 파라미터가 한개인 경우는 소괄호도 생략 가능
const fnc6 = a => `ttt ${a}`;
// 파라미터가 없는 경우는 소괄호 생략 불가능
const fnc7 = () => 'test';

// 콜백 함수 -> 지금 부르는게 아니라 나중에 부르겠다
// 적절한 시기에 함수 호출을 원하기 때문에 -> 비동기 처리를 위해
function callBackTest(bool, cb) {
  if(bool) {
    cb();
  }
  else {
    console.log('콜백 실행 안함');
  }
}

function test() {
  console.log('테스트 함수 실행');
}

callBackTest(true, test);