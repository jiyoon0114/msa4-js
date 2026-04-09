// Date 객체
// 시간과 날짜를 처리하기 위한 속성과 메서드를 가진 내장 객체
// 내부적으로 (로컬 타임존 -> 우리 컴퓨터의 지역 시계)에 따른 유닉스 타임스탬프(1970년 01월 01일 이후로부터 몇초가 지났는지) 기반의 동작

const now = new Date(); //현재 시간으로 Date 객체를 생성
// 객체는 기본적으로 toString이라는 메서드를 가지고 있음 -> Object 메서드
// toString없이 그냥 객체를 쓴다고 해도 자체적으로 toString을 실행함
console.log(now);

// 특정 시간대로 내가 원하는 시간 객체를 인스턴스화 할수있음
const date1 = new Date('1995-12-17 13:59:36');
console.log(date1);
const date2 = new Date(11545652135);
console.log(date2);
let date3 = new Date(1995, 11, 17, 3, 24, 0);
console.log(date3);

// Date.getfullyear(): number
//    연도를 정수로 반환
console.log(now.getFullYear());

// Date.getMonth(): number
//    월을 정수로 반환 -> 0부터 시작하기 때문에 (0 ~ 11로 반환) +1을 줌
console.log(now.getMonth() + 1);

// Date.getDate(): number 
//    일을 정수로 반환
console.log(now.getDate());

// Date.getHours(): number
//    시간을 정수로 반환
console.log(now.getHours());

// Date.getMinutes(): number
//    분을 정수로 반환
console.log(now.getMinutes());

// Date.getSeconds(): number
//    초를 정수로 반환
console.log(now.getSeconds());

// Date.getMilliseconds(): number
console.log(now.getMilliseconds());

// Date.getDay(): number
//  오늘 요일을 정수로 반환
//  일요일(0) ~  토요일(6) 반환
console.log(now.getDay());

// Date.getTime(): number
//    '1970-01-01 00:00:00' 기준으로 얼마나 흘렀는지 Unix 타임스탬프를 반환 -> 밀리초 단위
console.log(now.getTime());

let nowFormat = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

console.log(nowFormat);