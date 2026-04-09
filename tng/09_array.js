function bubbleSort(arr) {
  let arrLen = arr.length;
  let newArray = [...arr];
  for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen - i - 1; j++){
      let distance = newArray[j] - newArray[j + 1];
      if(distance > 0) {
        let temp = newArray[j];
        newArray[j] = newArray[j + 1];
        newArray[j + 1] = temp;
      } 
    }
  }
  return newArray;
}

// 원본은 보존하면서 오름차순 정렬 해주세요.
const ARR1 = [ 6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40 ];
const cp = [...ARR1]; //딥스 1밖에 카피 안돼서 깊은 복사는 아님
//const copy = JSON.parse(stringify(ARR1)); // 이렇게하면 딥카피라서 딥스가 깊어도 카피할수있음

console.log(ARR1, bubbleSort(ARR1));
resultArr = [...ARR1].sort((a, b) => a - b);
console.log(ARR1, resultArr);

// 짝수와 홀수를 분리해서 각각 새로운 배열 만들어 주세요.
const ARR2 = [5,7,3,4,5,1,2];
let arr1 = ARR2.filter(item => item % 2 === 0);
let arr2 = ARR2.filter(item => item % 2 === 1);
console.log(arr1);
console.log(arr2);

// 각 요소에 3으로 나눈 나머지를 구해서, 새로운 배열로 생성해 주세요.
const ARR3 = [5,7,3,4,5,1,2,0];

let resultArray = ARR3.map(item => item % 3);

console.log(resultArray);

// 배열은 레퍼런스 타입이기 때문에 -> 값을 참조할때마다 값의 주소값을 참조하기 때문에 무조건 원본 그자체를 참조한다
const arr4 = [5, 7, 3, 4, 5, 1, 2, 0];
const result = test(arr4);
console.log(arr4, result);

function test(arr) {
  return arr.sort((a,b) => a - b);
}
