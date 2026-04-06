
// var: 중복 선언 가능, 재할당 가능, 함수레벨 스코프
var num; //변수 중복 선언 가능
var num;
var age = 1;
num = 20; //재할당
//name - "안녕"  ""을 html에서 쓰면 오류가 뜰수 있기 때문에 ''을 씀
// console.log(num);

str1 = 'sadsd' //디폴트가 var이기 때문에 var 타입으로 나온다

//let : 중복 선언이 불가능, 재할당 가능, 블록레벨 스코프
// let heo = '홍길동';
// let name;  

// 상수, 재할당 불가능 , 블록레벨 스코프
// const gender = 'M';
// gender = 'ggod';

//호이스팅 : 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당 하는 것
//값이 할당 안된 상태에서 미리 var 변수의 메모리 공간을 줌 그래서 초기화 전 참조해도 에러 안 뜸 -> 그래서 var 안 씀
console.log(hoho);
var hoho = '호호';