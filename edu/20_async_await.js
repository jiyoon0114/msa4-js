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


// async/await
timePromise('A', 1000)
  .then(() => timePromise('B', 1000))
  .then(() => timePromise('C', 1000))
  .then(() => console.log('모든작업 완료'));


// async 함수 안에서만 await를 쓸 수 있음
async function test() {
  try {
    // await가 끝날때까지 기다린 다음 다음 줄 실행함
    await timePromise('A', 1000);
    await timePromise('B', 1000);
    await timePromise('C', 1000);
  } catch (error) { 
    console.log(error);
  }
}