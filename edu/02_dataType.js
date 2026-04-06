//js는 하나의 변수에 어떤 타입의 데이터도 저장이 가능

let num = 1; 
num = '111'; // 타입 신경 안 쓰고 넣기 가능
// '111'이랑 1을 리터널이라고 함

console.log(typeof num);

// string : 문자열 
let str = '문자열';
let str3 = `문자열 ${num}`; //템플릿 리터럴: 변수에 저장된 값을 이용해 문자열을 합칠때 사용
console.log(str3);

let id = '아이디';
let pw = '비밀번호';
let msg = '가 틀렸습니다';

// `${id}${msg}`;
// `${pw}${msg}`;

// boolean : 논리( true or false )
let bool1 = true;
let bool2 = false;

// undefind : 변수 선언했는데 값이 할당 되지 않은 상태
let undefinddVal;

//null : 변수에 값이 없음을 의도적으로 명시한 데이터 타입 (개발자의 선택)
let nullVal = null;

// Symbol: 절대 중복되지 않는 원시 타임(primitive tipe) 
const symbol1 = Symbol('test');

//Object (객체) : 키(key)-값(value)를 쌍으로 저장하는 reference type
//다양한 데이터 타입을 함께 같이 사용할 수 있음
let obj = {
  key1 : 'val1',
  key2 : 1,
  key : 3
};

console.log(obj.key1);