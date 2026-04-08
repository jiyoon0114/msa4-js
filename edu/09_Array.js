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

// Array.josin(separator): String 
//    배열의 요소를 구분자로 연결한 문자열을 만들어서 반환
//    배열의 요소가 없으면 빈문자열을 반환
//    separator를 생략하면 기본 구분자가 ','로 연결
arr = [1, 2, 3, 4, 5];
resultArr = arr.join(' ');
console.log(arr, resultArr);

