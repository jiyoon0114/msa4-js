// 타이머 함수
// 비동기적으로 코드를 실행

// setTimeout(callback, ms [, ...args] -> 생략 가능): number
// 설정한 일정 시간(ms) 후에 callback함수를 실행
// 콜백 함수에 파라미터가 필요한 경우 ...args를 추가
// 리턴값은 timeoutID 0이 아닌 정수값(해당 타이머의 고유한 식별값)
// node 환경에서는 timeoutID1이 객체로 넘어오고, 브라우저에서는 timeoutID1의 id가 리턴됨
const timeoutID1 = setTimeout(() => {
  console.log('1초');
}, 1000);
// console.log(timeoutID1);

// clearTimeout(timeoutId)
// setTimeout 함수로 생성한 타임아웃을 취소
clearTimeout(timeoutID1);

// setInterval(cb, ms[,...args]): number
// 설정한 일정 시간마다 콜백함수를 실행
// 반환값은 intervalID로 0이 아닌 정수 (해당 인터벌의 고유한 식별값)
const intervalId1 = setInterval(() => {
  console.log('인터벌');
}, 1000);

setTimeout(() => {
  clearInterval(intervalId1);
}, 5000);