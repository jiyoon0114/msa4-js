// Destructuring 데이터의 구조분해 문법
// 배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법

const arr = [1, 2, 3, 4, 5];
let arrVal1 = arr[0];
let arrVal2 = arr[1];
//  .....

//각각의 변수에 배열안에 있는 요소가 들어가게됨
const [val1, val2, val3, val4, val5] = arr;
// 처음과 마지막 변수값만 필요한 경우
const [realVal1, , , , ,realVal5] = arr;
// 처음과 두번째 변수값만 필요한 경우
const [hiVal1, hiVal2] = arr;
const [, goodVal1, , goodVal4] = arr;

// --------------------------------------
const user = {
  name: '홍길동',
  age: 20,
  gender: 'M',
  info: {
    board: 1
  }
}

// user 안에 있는 키값을 가져오게됨
const {name} = user;
// 디폴트값 설정 가능 (해당 객체의 해당키가 없을때 디폴트값을 사용하고 있을때는 객체의 addr값을 사용한다)
// age: userAge, user 객체 age값을 userAge라는 변수에 저장한다
/*info.user이렇게 못 가져옴 -> 딥스 1까지만 이렇게 가져오기 가능*/ 
const {age: userAge, gender, addr = '없음'} = user;
console.log(addr);
