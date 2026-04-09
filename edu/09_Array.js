// 배열 (Array) 객체
// 하나의 변수에 여러개의 값을 순차적으로 저장할 수 있는 데이터 구조, 데이터 타입 다양하게 한곳에 넣을 수 있음
// 데이터 타입은 Object
// 배열의 크기가 동적으로 변화 가능 
// 인덱스(index) 번호가 각 요소에 부여되고 이를 이용해서 순서를 정함.
// 반복문을 통해서 배열의 각 요소에 쉽게 접근 가능

const arr1 = [1, 2, 3, 4, 5];

console.log(arr1[2]);

// 배열의 길이를 반환
arr1.length;


const obj = {
  // 속성 : 객체 안에 선언한 변수 (프로퍼티)
  length: 1, 
  // 메서드 : 객체 안에 선언한 변수
  fnc: () => {
    console.log('함수임');
  }
}

obj.fnc();

// Array.isArray(arg): boolean 
// 배열인지 아닌지 체크함

// Array.include(searchElement): boolean
// 배열의 특정 요소의 존재 여부를 확인하고 true/false 반환

let array = [2, 4, 5, 6, 9];

function isInclude(num, arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == num) {
      return true;
    }
  }
  return false;
}

console.log(isInclude(1, array));
console.log(isInclude(9, array));

// Array.indexOf(searchElement): number
// 배열에서 특정 요소를 검색하고, 해당 인덱스를 반환
// 없으면 '-1'을 반환

let arr = ['홍길동', '둘리', '도우너'];
console.log(arr.indexOf('도우너'));

// Array.push(...args): number
//    원본 배열에 마지막 요소를 추가하고, 변경된 length를 반환함
let arr2 = [1, 2, 3];
let arr3 = arr2; 
// 같은 주소를 보는걸로 저장하지 말고 값자체를 복사할려면 [...array]를 사용해야한다, 
// 만약 object타입이 배열이면(딥스 1 이상)인 경우 값 복사가 아니라 주소값 복사가 됨-> 얇은 복사 
let arr4 = [...arr2];
let resultArr = arr2.push(5);
// 파라미터 여러개 가능
let hey = arr2.push(3,7);
console.log(resultArr);
console.log(arr2);
console.log(arr3);

test('둘리', '도우너');
function test(...args) {
  // ...이면 여러개의 데이터를 받고 배열로 만들어준다
  console.log(args);
}

// array.concat(...args): T[] 
//    배열의 마지막 요소를 추가한 새로운 배열을 반환함
arr = [1, 2, 3];
resultArr = arr.concat(4,6,7);
console.log(resultArr);

// Array.pop(): T || undefined 둘중 하나를 반환 ""원본 변경됨""
//    원본 배열의 마지막 요소를 제거하고, 제거된 요소를 반환
arr = [1, 2, 3];
resultArr = arr.pop();
console.log(resultArr);

// Array.unshift(...args): number "원본 변경" 
//   원본 배열의 첫번째 요소를 추가하고, 변경된 length를 반환
arr = [1, 2, 3];
resultArr = arr.unshift(100, 200, 300);
console.log(arr, resultArr);

// Array.shift(): T || undefined "원본 변경"
//    원본 배열의 첫번째 요소를 제거하고, 해당 요소를 반환
arr = [1, 2, 3];
resultArr = arr.shift();
console.log(arr);

// Array.splice(start, count, ...args(생략가능)): T[] "원본 변경"
//    1. start만 전달했을 경우 -> 해당 인덱스 요소부터 모두 제거한 요소들을 배열로 반환
arr = [1, 2, 3, 4, 5];
//    파라미터는 index 번호로 준다 -> if -음수를 준 경우는 뒤에서부터 잘라줌
resultArr = arr.splice(2);
console.log(arr, resultArr);

//    2. start와 count 전달했을 경우 
//      -> 해당 인덱스 요소부터 count 수 만큼의 요소를 제거하고 제거한 요소들을 배열로 반환
arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(2, 2);
console.log(arr, resultArr);

//    3. start와 count와 args를 전달했을 경우
//        해당 인덱스 요소부터 count 수 만큼의 요소를 제거하고,
//        해당 위치에 args를 삽입하고, 제거한 요소들을 배열로 반환
arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(2, 1, 100, 200, 300);
console.log(arr, resultArr);

// 원래는 배열을 바로 출력을 못하는데 console.log쪽에서 배열을 string으로 변환해서 출력해줌

// Array.join(separator): String 
//    배열의 요소를 구분자로 연결한 문자열을 만들어서 반환
//    배열의 요소가 없으면 빈문자열을 반환
//    separator를 생략하면 기본 구분자가 ','로 연결
arr = [1, 2, 3, 4, 5];
resultArr = arr.join(' ');
console.log(arr, resultArr);

// Array.sort(callback): T[] **원본 변경**
//    배열의 요소를 문자열로 변환 후 -> if 11같은 숫자가 온 경우 이 때문에 1 바로 뒤 인덱스 1에 위치하게됨, 오름차순 정렬을 하고 정렬한 배열을 반환
//    11같은 현상을 해결하기 위해 보통 콜백함수를 사용함
let arrs = [11, 6, 1, 7, 8, 10];
resultArr = arr.sort((a, b) => a - b);
console.log(arr, resultArr);

// Array.map(callback): T[] -> 중요!!!
//    배열의 모든 요소에 대해 콜백 함수를 반복 실행한 후, 
//    콜백 함수의 리턴 값들을 모아서 새로운 배열을 반환
arr = [1, 2, 3, 4, 5, 6];
// val이 배열 안 요소의 숫자가 순서대로 들어감
resultArr = arr.map(val => {
  if(val % 3 === 0) {
    return  '짝';
  }
  else {
    return val;
  }
});

console.log(arr, resultArr);

class MyArr {
  arr = [1, 2, 3, 4, 5, 6];
  map(cb) {
    // 새로운 배열
    const newArr = [];
    for(let i = 0; i < this.arr.length; i++) {
      newArr.push(cb(this.arr[i]));
    }
  }
}

// Array.some(callback): boolean
//    배열의 모든 요소에 대해 콜백함수를 실행 한 후, (콜백함수 return 값이 항상 있어야함)
//    조건에 맞는 결과가 하나라도 있으면 true, 없으면 false를 반환
arr = [
  {name:'홍길동', age:20 },
  {name: '둘리', age: 50},
  {name: '또치', age:45}
];
resultArr = arr.some(item => item.name === '홍길동');
console.log(resultArr);

// Array.every(callback): boolean
//    배열의 모든 요소에 대해 콜백함수를 실행 한 후, (콜백함수 return 값이 항상 있어야함)
//    모든 요소가 조건에 맞으면 true, 없으면 false를 반환
resultArr = arr.every(item => item.age >= 50);
console.log(resultArr);


// Array.filter(callback): T[] -> callback 함수의 return이 boolean이어야한다
//    배열의 모든 요소에 대해서 콜백함수를 실행 한수,
//    조건에 만족한 요소만 모아서 새로운 배열로 반환
//    변수에 값이 실제로 들어있으면 그것을 true로 인식함 -> 0은 빼고 0은 false로 인식함
arr = [
  {name:'홍길동', age:20 },
  {name: '둘리', age: 50},
  {name: '또치', age:45}
];
resultArr = arr.filter(item => item.age < 50);
console.log(resultArr, arr);

// Array.forEach(callback): void
//    모든 배열의 요소에 대해서 loop를 돌리고 싶을 때 사용
arr = [
  {name:'홍길동', age:20 },
  {name: '둘리', age: 50},
  {name: '또치', age:45}
];
arr.forEach((val, index/*(생략가능)*/) => {
  // 내가하고 싶은 처리
});
for(let i = 0; i < arr.length; i++) {
  // 내가 하고 싶은 처리
  // arr[i];
}
// 위랑 아래는 같음
