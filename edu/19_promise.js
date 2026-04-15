// A 나온 1초 뒤에 B 출력 -> B 나오고 1초 뒤에 C출력하는 방법

// 1. 콜백지옥
// setTimeout(() => {
//   console.log('A');
//   setTimeout(() => {
//     console.log('B');
//     setTimeout(() => {
//       console.log('C');
//     }, 1000);
//   }, 1000);
// }, 1000);

// 위 콜랙 지옥을 회피하기 위해 프로미스 기반으로 변경해보자
const timePromise = (str, ms) => {
  // resolve는 작업이 성공했을때를 알려주는 객체 -> 함수
  // reject는 작업이 실패했을때를 알려주는 객체 -> 함수
  // Promise의 로직을 내가 만듦
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof str === 'string'){
        console.log(str);
        return resolve('성공');
      }
      else {
        return reject('실패');
      }
    }, ms);
  });
}

/*
// 함수의 반환값이 resolve임 -> than() 실행, reject 반환 -> catch() 실행
// 체이닝 기법
timePromise('A', 1000)
.then(() => {timePromise('B', 1000);})
.then(() => {
  timePromise('B', 1000)
  // B작업 1초 뒤에 C -> 안에 또 넣음 -> 콜백지옥과 비슷
  .then(()=> {
    timePromise('c', 1000);
  });
})
// 어디든 reject가 반환되면 catch쪽으로 이동함
.catch((error) => {console.log(error)})
.finally(() => {console.log('파이널리')});
*/

// 병렬처리 하는 방법
Promise.all(
  [
    timePromise('A', 1000),
    timePromise('B', 2000),
    timePromise('C', 3000)
  ]
)
.then(() => console.log('모든작업 완료'));
